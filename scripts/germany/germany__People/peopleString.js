// Takes array of people as input and exports string with HTML tags for each object
export function tagGermanPeople(peopleObject) {
    return `<li class = "list-item">${peopleObject.name}</li>`
}