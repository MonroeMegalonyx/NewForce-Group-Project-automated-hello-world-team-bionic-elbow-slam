// Takes array of landmarks as input and exports string with HTML tags for each object
export function tagGermanLandmarks(landmarkObject) {
    return `<li class = "list-item">${landmarkObject.name}</li>`
}