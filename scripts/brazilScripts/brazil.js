export function country(countryListArray) {
    return `
    
    <section class = 'list-container'>
        <h2>Cities</h2>
             <ul class = 'list-child'>
                <li class = 'list-item'>${countryListArray[0]}</li>
                <li class = 'list-item'>${countryListArray[1]}</li>
                <li class = 'list-item'>${countryListArray[2]}</li>
            </ul>
    </section>


    <section class = 'list-container'>
        <h2>Landmarks</h2>
            <ul class = 'list-child'>
                <li class = 'list-item'>${countryListArray[0]}</li>
                <li class = 'list-item'>${countryListArray[1]}</li>
                <li class = 'list-item'>${countryListArray[2]}</li>
            </ul>
    </section>

    <section class = 'list-container'>
        <h2>Famous citizens</h2>
            <ul class = 'list-child'>
                <li class = 'list-item'>${countryListArray[0]}</li>
                <li class = 'list-item'>${countryListArray[1]}</li>
                <li class = 'list-item'>${countryListArray[2]}</li>
            </ul>
    </section>
    
    
    `
}

