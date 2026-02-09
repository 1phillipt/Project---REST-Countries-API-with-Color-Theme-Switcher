import { fetchCountries } from "./models/Countries.js";
import type { Country } from "./models/Countries.js";

const renderCountries = async (Countries: Country[]) => {
  const container = document.getElementById("countries-container");
  if (!container) return;

//   now this will loop into each countryy
}

renderCountries().then((countries) => {
  console.log(countries);
});
