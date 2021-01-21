import {cityArray, landmarkArray, citizenArray} from "./ItalyDataProvider.js"
import {italyCities, italyLandmark, italyCitizens} from "./Italy.js"

let cityContainer = document.querySelector("#city-container")

export const cityList = () => {
    
    let cityHTMLString = ""

    for (const city of cityArray) {
        cityHTMLString = italyCities(cityArray)
    }
    console.log(cityHTMLString)
    cityContainer.innerHTML = `<h2>Cities</h2>${cityHTMLString}`
}

let landmarkContainer = document.querySelector("#landmark-container")

export const landmarkList = () => {
    
    let landmarkHTMLString = ""

    for (const landmark of landmarkArray) {
        landmarkHTMLString = italyLandmark(landmarkArray)
    }
    console.log(landmarkHTMLString)
    landmarkContainer.innerHTML = `<h2>Landmark</h2>${landmarkHTMLString}`
}

let citizenContainer = document.querySelector("#citizen-container")

export const citizenList = () => {
    
    let citizenHTMLString = ""

    for (const citizen of citizenArray) {
        citizenHTMLString = italyCitizens(citizenArray)
    }
    console.log(citizenHTMLString)
    citizenContainer.innerHTML = `<h2>Citizens</h2>${citizenHTMLString}`
}