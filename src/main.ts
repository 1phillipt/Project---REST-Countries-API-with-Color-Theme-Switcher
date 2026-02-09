import { fetchCountries } from "./models/Countries.js";
import type { Country } from "./models/Countries.js";

const renderCountries = async (Countries: Country[]) => {


  const countriesContainer = document.getElementById("countries-container");
  if (!countriesContainer) return;

  countriesContainer.innerHTML = "";

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
   population.textContent = country.population?.toLocaleString() || "N/A";

   const region = document.createElement("p");
   region.textContent = country.region || "N/A";

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

let countries: Country[] = [];




//changes color theme
function darkModeToggle(){
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (!darkModeToggle) return;

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

//return country that takes Country as input

function searchCountries(search:string): Country[]{

return countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()));
}

//this funtion return the countries using filter region

function filterByRegion(filter:string):Country[]{
return countries.filter(country => country.region === filter);
}
    

function setUpSearch(){
    
    const searchInput = document.getElementById("search-input") as HTMLInputElement;
    const filterInput = document.getElementById("region-filter") as HTMLSelectElement;

      if (!searchInput || !filterInput) return;

    searchInput.addEventListener("input", () => {
        const search = searchInput.value.trim();
        const filtered = searchCountries(search);
        renderCountries(filtered);
    });

    filterInput.addEventListener("change", () => {
        const filter = filterInput.value;
        const filtered = filterByRegion(filter);
        renderCountries(filtered);
    });
}


async function init() {
    countries = await fetchCountries();
    renderCountries(countries);
    darkModeToggle();
    setUpSearch();
    
}
init();