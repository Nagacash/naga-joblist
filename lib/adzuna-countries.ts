export type CountryCode =
  | "us"
  | "gb"
  | "au"
  | "ca"
  | "de"
  | "fr"
  | "at"
  | "pl"
  | "in"
  | "nz"
  | "br"
  | "za";

/** All country codes supported by the Adzuna jobs API. */
export const COUNTRY_CODES: CountryCode[] = [
  "us",
  "gb",
  "ca",
  "au",
  "de",
  "fr",
  "at",
  "pl",
  "in",
  "nz",
  "br",
  "za",
];

export const ADZUNA_COUNTRY_GROUPS: {
  label: string;
  countries: { value: CountryCode; label: string }[];
}[] = [
  {
    label: "Americas",
    countries: [
      { value: "us", label: "United States" },
      { value: "ca", label: "Canada" },
      { value: "br", label: "Brazil" },
    ],
  },
  {
    label: "Europe",
    countries: [
      { value: "gb", label: "United Kingdom" },
      { value: "de", label: "Germany" },
      { value: "fr", label: "France" },
      { value: "at", label: "Austria" },
      { value: "pl", label: "Poland" },
    ],
  },
  {
    label: "Asia-Pacific",
    countries: [
      { value: "in", label: "India" },
      { value: "au", label: "Australia" },
      { value: "nz", label: "New Zealand" },
    ],
  },
  {
    label: "Africa",
    countries: [{ value: "za", label: "South Africa" }],
  },
];

export function isCountryCode(value: string): value is CountryCode {
  return COUNTRY_CODES.includes(value as CountryCode);
}

export function detectCountryFromLocation(location: string): CountryCode {
  const normalized = location.toLowerCase();

  if (
    /\b(uk|united kingdom|london|england|scotland|wales|manchester|birmingham|edinburgh|glasgow|bristol|leeds|liverpool)\b/.test(
      normalized,
    )
  ) {
    return "gb";
  }

  if (/\b(ireland|dublin|cork|galway|belfast)\b/.test(normalized)) {
    return "gb";
  }

  if (
    /\b(germany|deutschland|berlin|munich|münchen|hamburg|frankfurt|cologne|köln|stuttgart|düsseldorf|dusseldorf|leipzig|dresden|hannover|nuremberg|nürnberg)\b/.test(
      normalized,
    )
  ) {
    return "de";
  }

  if (
    /\b(france|paris|lyon|marseille|toulouse|nantes|strasbourg|bordeaux|lille)\b/.test(
      normalized,
    )
  ) {
    return "fr";
  }

  if (
    /\b(austria|österreich|oesterreich|vienna|wien|graz|salzburg|linz|innsbruck)\b/.test(
      normalized,
    )
  ) {
    return "at";
  }

  if (
    /\b(poland|polska|warsaw|warszawa|krakow|kraków|wroclaw|wrocław|gdansk|gdańsk|poznan|poznań)\b/.test(
      normalized,
    )
  ) {
    return "pl";
  }

  if (
    /\b(canada|toronto|vancouver|montreal|calgary|ottawa|ontario|quebec|british columbia|edmonton|winnipeg)\b/.test(
      normalized,
    )
  ) {
    return "ca";
  }

  if (
    /\b(new zealand|auckland|wellington|christchurch|hamilton|queenstown)\b/.test(
      normalized,
    )
  ) {
    return "nz";
  }

  if (
    /\b(australia|sydney|melbourne|brisbane|perth|adelaide|canberra|hobart|darwin)\b/.test(
      normalized,
    )
  ) {
    return "au";
  }

  if (
    /\b(india|bangalore|bengaluru|mumbai|delhi|new delhi|hyderabad|chennai|pune|gurgaon|gurugram|noida|kolkata|ahmedabad|jaipur|kochi)\b/.test(
      normalized,
    )
  ) {
    return "in";
  }

  if (
    /\b(brazil|brasil|são paulo|sao paulo|rio de janeiro|brasília|brasilia|belo horizonte|curitiba|porto alegre|recife)\b/.test(
      normalized,
    )
  ) {
    return "br";
  }

  if (
    /\b(south africa|johannesburg|cape town|pretoria|durban|sandton|port elizabeth)\b/.test(
      normalized,
    )
  ) {
    return "za";
  }

  return "us";
}
