import { fetchCountries } from "./models/Countries.js";
import type { Country } from "./models/Countries.js";

const renderCountries = async (Countries: Country[]) => {
  const countriesContainer = document.getElementById("countries-container");
  if (!countriesContainer) return;

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

//add elements to the info div
   info.appendChild(name);
   info.appendChild(population);
   info.appendChild(region);
   info.appendChild(capital);

   //add flag and info dev to the countriesContainer
   card.appendChild(flag);
   card.appendChild(info);
   countriesContainer.appendChild(card);
  });
}

async function init() {
    const countries = await fetchCountries();
    renderCountries(countries);
    darkModeToggle();
}

init();

//changes color theme
function darkModeToggle(){
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (!darkModeToggle) return;

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}
//return country from promise fuction that takes Country as input

async function filterCountries(country:string):Promise<Country[]>{
    const countries = await fetchCountries();
    return countries.filter(c => c.name.common.toLowerCase().includes(country.toLowerCase()));

}
async function searchCountries(country: string): Promise<Country[]> {
    const countries = await fetchCountries();
    return countries.filter(c => c.name.common.toLowerCase().includes(country.toLowerCase()));
}
