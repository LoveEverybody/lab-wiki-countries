//import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'

function CountriesList({ countries }) {

    //  const [countriesList, setCountriesList] = useState(countries)

    return (
        <div class="container">
            <div class="row">
                <div class="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
                    {/* why this adjust? */}
                    <div class="list-group">

                        {
                            countries.map(country => {
                                //let countryLow = (country.alpha3Code).toLowerCase() - why does it not work?
                                //key={country.alpha3Code}
                                return (
                                    <Link
                                        key={country.alpha3Code}
                                        className="list-group-item list-group-item-action"
                                        to={`/${country.alpha3Code}`}>
                                        <img src={`https://flagpedia.net/data/flags/icon/48x36/${country.alpha2Code.toLowerCase()}.png`} alt="Flag" />
                                        <p>{country.name.common}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default CountriesList;