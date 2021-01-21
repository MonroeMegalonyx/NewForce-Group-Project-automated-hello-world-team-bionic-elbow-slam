import { useLandmarks } from "./landmarksDataProvider.js";
import { landmarkCard } from "./Landmarks.js";


let landmarkContainer = document.querySelector("#landmarks-list")

export function landmarksList(){
    const landmarkCopy = useLandmarks()

    let landmarkHTMLstring =''

    for(const singleLandmark of landmarkCopy){
        landmarkHTMLstring += landmarkCard(singleLandmark)
    }

    landmarkContainer.innerHTML += `${landmarkHTMLstring}`
}
