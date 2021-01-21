export function cityCard(singleCity) {
    console.log("this is single city", singleCity)
    
    return `
    
        <section class = 'list-container'>
        <h2>Cities</h2>
             <ul class = 'list-child'>
                <li class = 'list-item'>${singleCity[0]}</li>
                <li class = 'list-item'>${singleCity[1]}</li>
                <li class = 'list-item'>${singleCity[2]}</li>
            </ul>
            </section>


    
    `
}

