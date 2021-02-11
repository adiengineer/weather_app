import React, { useState } from 'react';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});

    function getForecast() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=Milpitas&APPID=2ccb2b4f05ea8b95ded69eac95b7e3bf")
        .then(response => response.json())
        .then(response => {
            setResponseObj(response);
            //console.log(response);
        })
        .catch(err => {
        console.log(err.message);
        });
    }

   return (
    <div>
        <h2>Current Weather Conditions</h2>
        <div>
        {JSON.stringify(responseObj)}
        </div>
        <button onClick={getForecast}>Get Forecast</button>
    </div>
   )
}

export default Forecast;