import type { CountryCode } from "./adzuna-countries";

export {
  type CountryCode,
  COUNTRY_CODES,
  ADZUNA_COUNTRY_GROUPS,
  detectCountryFromLocation,
  isCountryCode,
} from "./adzuna-countries";

const CURRENCY_BY_COUNTRY: Record<
  CountryCode,
  { symbol: string; position: "prefix" | "suffix" }
> = {
  us: { symbol: "$", position: "prefix" },
  ca: { symbol: "CA$", position: "prefix" },
  gb: { symbol: "£", position: "prefix" },
  au: { symbol: "A$", position: "prefix" },
  nz: { symbol: "NZ$", position: "prefix" },
  de: { symbol: "€", position: "prefix" },
  fr: { symbol: "€", position: "prefix" },
  at: { symbol: "€", position: "prefix" },
  pl: { symbol: "zł", position: "suffix" },
  in: { symbol: "₹", position: "prefix" },
  br: { symbol: "R$", position: "prefix" },
  za: { symbol: "R", position: "prefix" },
};

export function formatAdzunaSalary(
  min: number | undefined,
  max: number | undefined,
  country: CountryCode,
): string | null {
  if (min == null) return null;

  const high = max ?? min;
  const { symbol, position } = CURRENCY_BY_COUNTRY[country];

  const formatAmount = (amount: number): string => {
    const thousands = Math.round(amount / 1000);
    return position === "prefix"
      ? `${symbol}${thousands}k`
      : `${thousands}k${symbol}`;
  };

  const lowLabel = formatAmount(min);
  const highLabel = formatAmount(high);

  return lowLabel === highLabel ? lowLabel : `${lowLabel} - ${highLabel}`;
}

export type AdzunaJob = {
  id: string;
  title: string;
  company: { display_name: string };
  location: { display_name: string };
  description: string;
  redirect_url: string;
  salary_min?: number;
  salary_max?: number;
  salary_is_predicted: "0" | "1";
  contract_type?: string;
  created: string;
  category: { tag: string; label: string };
};

export class AdzunaConfigError extends Error {
  constructor(message = "Adzuna API credentials are not configured") {
    super(message);
    this.name = "AdzunaConfigError";
  }
}

export class AdzunaApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "AdzunaApiError";
    this.status = status;
  }
}

export function getAdzunaConfig(): { appId: string; appKey: string } {
  const appId = process.env.ADZUNA_APP_ID?.trim();
  const appKey = process.env.ADZUNA_APP_KEY?.trim();

  if (!appId || !appKey) {
    throw new AdzunaConfigError();
  }

  return { appId, appKey };
}

export async function searchJobs(
  jobTitle: string,
  location: string,
  country: CountryCode = "us",
): Promise<AdzunaJob[]> {
  const { appId, appKey } = getAdzunaConfig();

  const params = new URLSearchParams({
    app_id: appId,
    app_key: appKey,
    what: jobTitle,
    category: "it-jobs",
    results_per_page: "10",
    "content-type": "application/json",
  });

  if (location) {
    params.set("where", location);
  }

  const response = await fetch(
    `https://api.adzuna.com/v1/api/jobs/${country}/search/1?${params}`,
  );

  if (!response.ok) {
    let message = `Adzuna API error: ${response.status}`;
    try {
      const body = (await response.json()) as {
        __CLASS__?: string;
        exception?: string;
      };
      if (body.exception) {
        message = body.exception;
      }
    } catch {
      // keep default message when body is not JSON
    }
    throw new AdzunaApiError(response.status, message);
  }

  const data = (await response.json()) as { results?: AdzunaJob[] };
  return data.results ?? [];
}
