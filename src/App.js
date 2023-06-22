import React, { useState, useEffect } from 'react'
import './App.css';
import DisplayCity from './Components/DisplayCity';
import DisplayWeather from './Components/DisplayWeather';
import InputData from './Components/InputData';
import axios from 'axios';

function App() {
  const [city, setCity] = useState("")
  const [data, setData] = useState({})
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53fd73c4ea28895bad6eb828c6085615&units=metric`


  const searchCity = (e) => {
    if (e.key === 'Enter') {
      axios.get(url).then((resp) => {
        setData(resp.data)
        setCity(resp.data.name)
        console.log(resp.data);
      }).catch(err => setCity("No Data found"))

      data.name && setCity(data.name)
      //  console.log(data && data.name);
    }
  }

  // useEffect(() => {

  // }, [city])

return (
  <div className="outer-container">
    <p className="heading">Weather Report</p>
    <InputData city={city} setCity={setCity} searchCity={searchCity} />
    <DisplayCity city={city} data={data} />
    <DisplayWeather data={data}/>
  </div>
);
}

export default App;
