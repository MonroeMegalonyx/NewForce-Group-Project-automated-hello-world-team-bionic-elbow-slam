// Save the list of cities as an array and provide an export function for the data
const citiesArray = [
    {
        name: "Berlin",
    },
    {
        name: "Hamburg",
    },
    {
        name: "Munich",
    },  
];

// Export function for list of cities
export const getGermanCities = () => {
    return citiesArray.slice();
}