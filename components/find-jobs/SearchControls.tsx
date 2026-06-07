"use client";

import { Search, Loader2 } from "lucide-react";
import { useRef, useState } from "react";

import {
  ADZUNA_COUNTRY_GROUPS,
  detectCountryFromLocation,
  type CountryCode,
} from "@/lib/adzuna-countries";

type Props = {
  onSearch: (jobTitle: string, location: string, country: CountryCode) => void;
  isSearching: boolean;
  successMessage: string | null;
  errorMessage: string | null;
};

export function SearchControls({
  onSearch,
  isSearching,
  successMessage,
  errorMessage,
}: Props) {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [country, setCountry] = useState<CountryCode>("us");
  const countryManuallySet = useRef(false);

  function handleLocationChange(value: string) {
    setLocation(value);
    if (!countryManuallySet.current) {
      setCountry(detectCountryFromLocation(value));
    }
  }

  function handleCountryChange(value: CountryCode) {
    countryManuallySet.current = true;
    setCountry(value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!jobTitle.trim()) return;
    onSearch(jobTitle.trim(), location.trim(), country);
  }

  return (
    <div className="glass-panel p-6">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_180px_auto]">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-text-secondary">
              Job Title
            </label>
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
                aria-hidden="true"
              />
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Frontend Engineer"
                className="glass-field w-full rounded-lg py-2 pl-9 pr-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wide text-text-secondary">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => handleLocationChange(e.target.value)}
              onBlur={() => {
                if (!countryManuallySet.current) {
                  setCountry(detectCountryFromLocation(location));
                }
              }}
              placeholder="Remote, Berlin, Bangalore..."
              className="glass-field w-full rounded-lg px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="country-select"
              className="text-xs font-medium uppercase tracking-wide text-text-secondary"
            >
              Country
            </label>
            <select
              id="country-select"
              value={country}
              onChange={(e) => handleCountryChange(e.target.value as CountryCode)}
              className="glass-field w-full rounded-lg px-3 py-2 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
            >
              {ADZUNA_COUNTRY_GROUPS.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.countries.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <p className="text-xs text-text-muted">
              Naga Codexx covers 12 job markets. For Netherlands, Spain, Italy,
              and other countries, pick the closest supported market. Dublin uses
              the UK index — Irish listings may be limited.
            </p>
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              disabled={isSearching || !jobTitle.trim()}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
            >
              {isSearching ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              Find Jobs
            </button>
          </div>
        </div>

        {errorMessage && (
          <div className="mt-4 rounded-md border border-error bg-surface px-4 py-3 text-sm font-medium text-error">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="mt-4 flex items-center gap-2 rounded-lg border border-success-light bg-success-lightest px-4 py-2.5">
            <span className="text-base">✨</span>
            <p className="text-sm font-medium text-success-foreground">{successMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
}
