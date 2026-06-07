export type DayCount = { day: string; count: number };
export type MatchBucket = { range: string; count: number };

const MATCH_BUCKETS = ["50-60%", "60-70%", "70-80%", "80-90%", "90-100%"] as const;

const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

type HogQLResponse = {
  columns?: string[];
  results?: unknown[][];
};

function getPostHogApiHost(): string {
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
  if (host.includes("eu")) {
    return "https://eu.posthog.com";
  }
  return "https://us.posthog.com";
}

function assertUserId(userId: string): string {
  if (!/^[0-9a-f-]{36}$/i.test(userId)) {
    throw new Error("Invalid user id");
  }
  return userId;
}

async function runHogQLQuery(userId: string, query: string): Promise<Record<string, unknown>[]> {
  const personalApiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  const projectId = process.env.POSTHOG_PROJECT_ID;

  if (!personalApiKey || !projectId) {
    return [];
  }

  const safeUserId = assertUserId(userId);
  const sanitizedQuery = query.replaceAll("{userId}", safeUserId);

  try {
    const response = await fetch(
      `${getPostHogApiHost()}/api/projects/${projectId}/query/`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${personalApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: {
            kind: "HogQLQuery",
            query: sanitizedQuery,
          },
        }),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      console.error("[posthog-analytics]", await response.text());
      return [];
    }

    const data = (await response.json()) as HogQLResponse;
    const columns = data.columns ?? [];
    const rows = data.results ?? [];

    return rows.map((row) => {
      const record: Record<string, unknown> = {};
      columns.forEach((column, index) => {
        record[column] = row[index];
      });
      return record;
    });
  } catch (error) {
    console.error("[posthog-analytics]", error);
    return [];
  }
}

function formatShortDate(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "numeric", day: "numeric" });
}

function buildDaySeries(days: number): DayCount[] {
  const series: DayCount[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let offset = days - 1; offset >= 0; offset -= 1) {
    const date = new Date(today);
    date.setDate(today.getDate() - offset);
    series.push({
      day:
        days <= 7
          ? DAY_LABELS[date.getDay()]
          : formatShortDate(date),
      count: 0,
    });
  }

  return series;
}

function fillDayCounts(
  rows: Record<string, unknown>[],
  days: number,
  dateKey = "day",
  countKey = "count",
): DayCount[] {
  const series = buildDaySeries(days);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(today);
  start.setDate(today.getDate() - (days - 1));

  const countsByDate = new Map<string, number>();
  for (const row of rows) {
    const rawDay = row[dateKey];
    const rawCount = row[countKey];
    if (typeof rawDay !== "string" && typeof rawDay !== "number") {
      continue;
    }

    const date = new Date(String(rawDay));
    if (Number.isNaN(date.getTime())) {
      continue;
    }

    const key = date.toISOString().slice(0, 10);
    countsByDate.set(key, Number(rawCount) || 0);
  }

  return series.map((entry, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    const key = date.toISOString().slice(0, 10);
    return {
      day: entry.day,
      count: countsByDate.get(key) ?? 0,
    };
  });
}

export async function fetchJobsOverTime(userId: string): Promise<DayCount[]> {
  const rows = await runHogQLQuery(
    userId,
    `
      SELECT
        toDate(timestamp) AS day,
        count() AS count
      FROM events
      WHERE event = 'job_found'
        AND distinct_id = '{userId}'
        AND timestamp >= now() - INTERVAL 30 DAY
      GROUP BY day
      ORDER BY day
    `,
  );

  return fillDayCounts(rows, 30);
}

export async function fetchCompanyResearchActivity(userId: string): Promise<DayCount[]> {
  const rows = await runHogQLQuery(
    userId,
    `
      SELECT
        toDate(timestamp) AS day,
        count() AS count
      FROM events
      WHERE event = 'company_researched'
        AND distinct_id = '{userId}'
        AND timestamp >= now() - INTERVAL 7 DAY
      GROUP BY day
      ORDER BY day
    `,
  );

  return fillDayCounts(rows, 7);
}

export async function fetchMatchDistribution(userId: string): Promise<MatchBucket[]> {
  const rows = await runHogQLQuery(
    userId,
    `
      SELECT
        multiIf(
          toFloat(properties.matchScore) >= 90, '90-100%',
          toFloat(properties.matchScore) >= 80, '80-90%',
          toFloat(properties.matchScore) >= 70, '70-80%',
          toFloat(properties.matchScore) >= 60, '60-70%',
          toFloat(properties.matchScore) >= 50, '50-60%',
          'below'
        ) AS range,
        count() AS count
      FROM events
      WHERE event = 'job_found'
        AND distinct_id = '{userId}'
        AND toFloat(properties.matchScore) >= 50
      GROUP BY range
    `,
  );

  const counts: Record<string, number> = {};
  for (const row of rows) {
    const range = String(row.range ?? "");
    if (range === "below") {
      continue;
    }
    counts[range] = Number(row.count) || 0;
  }

  return MATCH_BUCKETS.map((range) => ({
    range,
    count: counts[range] ?? 0,
  }));
}
