import { useCityData, useCitizenData, useLandmarkData } from './mexicoDataProvider.js'
import { createHTML } from './listItem.js'

export const completedListHTML = (listName) => {
    console.log(listName)
    let dataArray = [];
    let htmlListItem = '';
    if (listName === "Cities") {
        dataArray = (useCityData());
        htmlListItem = document.querySelector("#city-list-container")
    } else if (listName === "Landmarks") {
        dataArray = (useLandmarkData());
        htmlListItem = document.querySelector("#landmarks-list-container")
    } else if (listName === "Citizens") {
        dataArray = (useCitizenData());
        htmlListItem = document.querySelector("#citizens-list-container")
    }
    console.log(dataArray)
    let htmlString = "";
    for (const dataItem of dataArray) {
        htmlString += createHTML(dataItem);
    }

    return htmlListItem.innerHTML = `<h2>${listName}</h2><ul class = "list-child">${htmlString}</ul>`
}