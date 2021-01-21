
let mexicoCityData = [
    "Mexico City",
    "Ecatepec",
    "Guadalajara"
];

let mexicoLandmarkData = [
    "Angel de la Independencia",
    "Zocalo",
    "Catedral Metropolitana"
];

let mexicoCitizenData = [
    "Mexico El Chapo Guzman",
    "Canelo Alvarez",
    "Carlos Santana"
];

export const useCityData = () => {
    
    // alphabetize object
    const dataArray = mexicoCityData.sort()
    
    return dataArray
}
export const useLandmarkData = () => {
    
    // alphabetize object
    const dataArray = mexicoLandmarkData.sort()
    
    return dataArray
}
export const useCitizenData = () => {
    
    // alphabetize object
    const dataArray = mexicoCitizenData.sort()
    
    return dataArray
}

// const useData = (dataName) => {
//     console.log(dataName)
//     if (dataName === "City") {
//         let object = mexicoCityData;
//     } else if (dataName === "Landmark") {
//         let object = mexicoLandmarkData;
//     } else if (dataName === "Citizen") {
//         let object = norwayCitizenData;
//     }
//     // alphabetize object
//     // const dataArray = object.sort()
    
//     return object
// }

