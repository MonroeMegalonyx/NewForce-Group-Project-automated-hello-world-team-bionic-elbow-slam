import { useCities, useFamousPerson, useLandmarks} from "./brazilDataProvider.js"

import { country } from "./brazil.js"

let brazilContainer = document.querySelector("#brazil-lists")

function buildBrazilHTML(brazilArray){
    let brazilHTMLstring = '';

    for(let i = 0; i < brazilArray.length; i++) {
        brazilHTMLstring += country(brazilArray[i]);
    }
    return brazilHTMLstring
}

export function brazilLists() {
    const citiesCopy = useCities();
    const landmarksCopy = useLandmarks();
    const famousPersonCopy = useFamousPerson();

    const citiesHTML = buildBrazilHTML(citiesCopy);
    const landmarksHTML = buildBrazilHTML(landmarksCopy);
    const 



}