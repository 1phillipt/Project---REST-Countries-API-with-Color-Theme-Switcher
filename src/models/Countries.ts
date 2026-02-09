const api: string = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3";

export interface Country {
  name: {
    common: string;
    official: string;       
  }
  flags: {
    png: string;
    svg: string;
    alt: string;
  }
  capital?: string;
  region?: string;
  population?: number;
}

export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(api);
  const countries = await response.json();
  return countries;
}


