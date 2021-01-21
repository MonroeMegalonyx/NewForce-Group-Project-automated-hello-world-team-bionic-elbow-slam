// Save the list of people as an array and provide an export function for the data
const peopleArray = [
    {
        name: "Ludwig van Beethoven",
    },
    {
        name: "Albert Einstein",
    },
    {
        name: "Michael Schumacher",
    },  
];

// Export function for list of people
export const getGermanPeople = () => {
    return peopleArray.slice();
}