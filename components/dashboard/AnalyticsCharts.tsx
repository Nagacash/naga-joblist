"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import type { DayCount, MatchBucket } from "@/lib/posthog-analytics";

const AXIS_STYLE = { fill: "var(--color-text-muted)", fontSize: 12 };

function ChartEmptyState({ message }: { message: string }) {
  return (
    <p className="mt-5 text-sm text-text-muted">{message}</p>
  );
}

function hasChartData<T extends { count: number }>(data: T[]): boolean {
  return data.some((entry) => entry.count > 0);
}

export function CompanyResearchChart({ data }: { data: DayCount[] }) {
  const isEmpty = !hasChartData(data);

  return (
    <div className="glass-panel p-6">
      <h2 className="text-base font-semibold leading-6 text-text-primary">
        Company Research Activity
      </h2>
      {isEmpty ? (
        <ChartEmptyState message="No company research activity yet. Research a company from a job details page." />
      ) : (
      <div className="mt-6 h-55">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="var(--color-border)"
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={AXIS_STYLE}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={AXIS_STYLE}
              tickCount={5}
            />
            <Tooltip
              cursor={{ fill: "var(--color-surface-secondary)" }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid var(--color-border)",
                fontSize: 12,
              }}
            />
            <Bar
              dataKey="count"
              fill="var(--color-info)"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      )}
    </div>
  );
}

export function JobsOverTimeChart({ data }: { data: DayCount[] }) {
  const isEmpty = !hasChartData(data);

  return (
    <div className="glass-panel p-6">
      <h2 className="text-base font-semibold leading-6 text-text-primary">
        Jobs Found Over Time
      </h2>
      {isEmpty ? (
        <ChartEmptyState message="No jobs found yet. Run a search on the Find Jobs page to see activity here." />
      ) : (
      <div className="mt-6 h-55">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="jobsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-accent)"
                  stopOpacity={0.2}
                />
                <stop
                  offset="100%"
                  stopColor="var(--color-accent)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke="var(--color-border)"
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={AXIS_STYLE}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={AXIS_STYLE}
              tickCount={5}
            />
            <Tooltip
              cursor={{ stroke: "var(--color-border)", strokeWidth: 1 }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid var(--color-border)",
                fontSize: 12,
              }}
            />
            <Area
              type="monotone"
              dataKey="count"
              stroke="var(--color-accent)"
              strokeWidth={3}
              fill="url(#jobsGradient)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      )}
    </div>
  );
}

export function MatchDistributionChart({ data }: { data: MatchBucket[] }) {
  const isEmpty = !hasChartData(data);

  return (
    <div className="glass-panel p-6">
      <h2 className="text-base font-semibold leading-6 text-text-primary">
        Match Score Distribution
      </h2>
      {isEmpty ? (
        <ChartEmptyState message="No match scores yet. Jobs will appear here after your first search." />
      ) : (
      <div className="mt-6 h-55">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              vertical={false}
              stroke="var(--color-border)"
              strokeDasharray="4 4"
            />
            <XAxis
              dataKey="range"
              axisLine={false}
              tickLine={false}
              tick={AXIS_STYLE}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={AXIS_STYLE}
              tickCount={5}
            />
            <Tooltip
              cursor={{ fill: "var(--color-surface-secondary)" }}
              contentStyle={{
                borderRadius: 8,
                border: "1px solid var(--color-border)",
                fontSize: 12,
              }}
            />
            <Bar
              dataKey="count"
              fill="var(--color-success)"
              radius={[4, 4, 0, 0]}
              maxBarSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      )}
    </div>
  );
}
