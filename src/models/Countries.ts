const api: string = "https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,cca3";

interface Country {
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

async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(api);
  const countries = await response.json();
  return countries;
}

const fetchedCountries = await fetchCountries();

console.log(fetchedCountries.length);

fetchedCountries.forEach((country) => {
  console.log(country);
});
