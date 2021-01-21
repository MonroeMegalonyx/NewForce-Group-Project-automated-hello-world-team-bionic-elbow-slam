let brazilCities = ["Rio de Janeiro", "São Paulo", "Salvador"];
let brazilLandmarks = ["Iguazu Falls", "Christ the Redeemer", "Sugar Loaf Mountain"]
let brazilFamousPerson = ["Pelé", "Gisele Bündchen", "Paulo Coelho"]



export function useCities(){
    return brazilCities.slice()
}

export function useLandmarks(){
    return brazilLandmarks.slice()
}

export function useFamousPerson(){
    return brazilFamousPerson.slice()
}