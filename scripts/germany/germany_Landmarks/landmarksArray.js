// Save the list of landmark as an array and provide an export function for the data
const landmarksArray = [
    {
        name: "Cologne Cathedral",
    },
    {
        name: "Brandenburg Gate",
    },
    {
        name: "Neuschwanstein Castle",
    },  
];

// Export function for list of cities
export const getGermanLandmarks = () => {
    return landmarksArray.slice();
}