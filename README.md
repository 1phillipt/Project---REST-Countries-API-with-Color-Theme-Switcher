First, I created folder and files using bash command lines.
Countries.ts - contains Country interface for the blueprint contract but here is used just to fetch data from api type Country.

index.html - contain header - where in the worlds and button for changing mode for the page. It also contain search button and filer by region select options.And countries-container div where countries will be rendered.

main.ts - as of now this will import countries and country ts. and creates and adds element to the html file. has filter function and search. calls these function by setUpSearch on input and change event listener. 

init() function runs when page loads calling countries = await fetchCountries();
    renderCountries(countries);
    darkModeToggle();
    setUpSearch();

Here is the publish site for my work -
https://phillipthapa-rest-countries.netlify.app/
