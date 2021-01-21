import { peopleCopy } from "./famousDataProvider.js";
import { personCard } from "./famousPeople.js"



let peopleContainer = document.querySelector("#people-list")

export function peopleList(){
    const peopleDataCopy = peopleCopy()
    let peopleHTMLstring = ''

    for(const singleObject of peopleDataCopy){
        peopleHTMLstring += personCard(singleObject)
    }

    peopleContainer.innerHTML += `${peopleHTMLstring}`

}