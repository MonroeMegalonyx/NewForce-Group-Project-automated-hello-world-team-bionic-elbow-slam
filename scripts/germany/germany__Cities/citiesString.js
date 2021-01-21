// Takes array of cities as input and exports string with HTML tags for each object
export function tagGermanCities(cityObject) {
    return `<li class = "list-item">${cityObject.name}</li>`
}