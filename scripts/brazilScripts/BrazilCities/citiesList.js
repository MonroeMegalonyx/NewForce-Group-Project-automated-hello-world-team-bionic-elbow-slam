import { useCities } from './citiesDataProvider.js'

import { cityCard } from './cities.js'


let cityContainer = document.querySelector("#cities-list")

export function cityList() {
    const citiesListCopy = useCities();

    let citiesHTMLstring = ''

    for(const singleCity of citiesListCopy){
        
        citiesHTMLstring += cityCard(singleCity)

    }
        cityContainer.innerHTML += `${citiesHTMLstring}`

}