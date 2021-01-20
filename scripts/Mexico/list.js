import { useCityData, useCitizenData, useLandmarkData } from './mexicoDataProvider.js'
import { createHTML } from './listItem.js'

export const completedListHTML = (listName) => {
    let dataArray = [];
    let htmlListItem = '';
    if (listName === "City") {
        dataArray.push(useCityData());
        htmlListItem = document.querySelector("#city-list-container")
    } else if (listName === "Landmark") {
        dataArray.push(useLandmarkData());
        htmlListItem = document.querySelector("#landmarks-list-container")
    } else if (listName === "Citizen") {
        dataArray.push(useCitizenData());
        htmlListItem = document.querySelector("#citizens-list-container")
    }
    console.log(dataArray)
    let htmlString = "";
    for (const dataItem in dataArray) {
        htmlString += createHTML(dataItem);
    }

    return htmlListItem.innerHTML = `<h2>${listName}</h2><ul class = "list-child">${htmlString}</ul>`
}