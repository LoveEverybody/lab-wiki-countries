import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; 
import countriesJson from './countries.json'
import Navbar from './Components/Navbar'
import CountriesList from './Components/CountriesList'

function App() {

  const [countries, setCountries] = useState(countriesJson)

  return (
    <div className="App">
      <Navbar />
      <CountriesList countries={countries} />
    </div>
  );
}

export default App;
