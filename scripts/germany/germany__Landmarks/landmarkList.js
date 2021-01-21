// Takes HTML string and array of all cities as input and exports the full HTML block for the list of cities
import { getGermanLandmarks } from "./landmarksArray.js";
import { tagGermanLandmarks } from "./landmarksString.js";

let germanLandmarkContainer = document.querySelector("#german-landmarks");

export function listGermanLandmarks() {
    const allGermanLandmarks = getGermanLandmarks();
    let germanLandmarksListHTML = "";
    for (let i = 0; i < allGermanLandmarks.length; i++) {
        germanLandmarksListHTML += tagGermanLandmarks(allGermanLandmarks[i]);
    }

    germanLandmarkContainer.innerHTML = `<h2>List of Landmarks</h2>${germanLandmarksListHTML}`;
}
