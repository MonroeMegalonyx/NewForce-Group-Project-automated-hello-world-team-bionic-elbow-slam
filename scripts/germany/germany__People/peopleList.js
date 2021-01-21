// Takes HTML string and array of all people as input and exports the full HTML block for the list of people
import { getGermanPeople } from "./peopleArray.js";
import { tagGermanPeople } from "./peopleString.js";

let germanCityContainer = document.querySelector("#german-people");

export function listGermanPeople() {
    const allGermanPeople = getGermanPeople();
    let germanPeopleListHTML = "";
    for (let i = 0; i < allGermanPeople.length; i++) {
        germanPeopleListHTML += tagGermanPeople(allGermanPeople[i]);
    }

    germanCityContainer.innerHTML = `<h2>List of People</h2>${germanPeopleListHTML}`;
}
