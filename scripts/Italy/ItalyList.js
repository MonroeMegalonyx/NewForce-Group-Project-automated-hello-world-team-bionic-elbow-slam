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

export const landmarkList = () => {
    
    let landmarkHTMLString = ""

    for (const landmark of landmarkArray) {
        landmarkHTMLString = (italyLandmarkArray)
    }
    console.log(landmarkHTMLString)
    landmarkContainer.innerHTML = `<h2>Landmark</h2>${landmarkHTMLString}`
}

export const cityList = () => {
    
    let cityHTMLString = ""

    for (const city of cityArray) {
        cityHTMLString = italyCities(cityArray)
    }
    console.log(cityHTMLString)
    cityContainer.innerHTML = `<h2>Cities</h2>${cityHTMLString}`
}