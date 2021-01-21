// Takes HTML string and array of all cities as input and exports the full HTML block for the list of cities
import { getGermanCities } from "./citiesArray.js";
import { tagGermanCities } from "./citiesString.js";

let germanCityContainer = document.querySelector("#german-cities");

export function listGermanCities() {
    const allGermanCities = getGermanCities();
    let germanCitiesListHTML = "";
    for (let i = 0; i < allGermanCities.length; i++) {
        germanCitiesListHTML += tagGermanCities(allGermanCities[i]);
    }

    germanCityContainer.innerHTML = `<h2>List of Cities</h2>${germanCitiesListHTML}`;
}
