export function country(countryObject) {
    return `
    
    <section class = 'list-container'>
        <h2>Cities</h2>
             <ul class = 'list-child'>
                <li class = 'list-item'>${}</li>
                <li class = 'list-item'>${}</li>
                <li class = 'list-item'>${}</li>
            </ul>
    </section>


    <section class = 'list-container'>
        <h2>Landmarks</h2>
            <ul class = 'list-child'>
                <li class = 'list-item'>${}</li>
                <li class = 'list-item'>${}</li>
                <li class = 'list-item'>${}</li>
            </ul>
    </section>

    <section class = 'list-container'>
        <h2>Famous citizens</h2>
            <ul class = 'list-child'>
                <li class = 'list-item'>${}</li>
                <li class = 'list-item'>${}</li>
                <li class = 'list-item'>${}</li>
            </ul>
    </section>
    
    
    `
}

