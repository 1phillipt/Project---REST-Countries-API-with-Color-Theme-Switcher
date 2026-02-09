import { fetchCountries } from "./models/Countries.js";
import type { Country } from "./models/Countries.js";

const renderCountries = async (Countries: Country[]) => {
  const container = document.getElementById("countries-container");
  if (!container) return;

//   now this will loop into each country
  Countries.forEach((country) => {

    //creates card dev
   const card = document.createElement("div");
   card.className ="country-card";

   //creates and sets flag element
   const flag = document.createElement("img");
   flag.src = country.flags.png;
   flag.alt = country.flags.alt;

   //creates info dev
   const info = document.createElement("div");
   info.className = "country-info";

   //creates country name and sets it to the country's common name
   const name = document.createElement("h2");
   name.textContent = country.name.common;
   
   const population = document.createElement("p");
   population.innerHTML = country.population?.toLocaleString() || "N/A";

   const region = document.createElement("p");
   region.innerHTML = country.region || "N/A";

   const capital = document.createElement("p");
   capital.textContent = country.capital || "N/A";




  });
}

