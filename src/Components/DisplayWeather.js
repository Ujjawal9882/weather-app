import React from 'react'

export default function DisplayWeather(props) {
  return (
    <div className='weather-display-div'>
      {
        props.data.weather && 
           
          (  <div>
              <p>{props.data.weather[0].main}</p>
              <p>{props.data.weather[0].description}</p>
            </div>
          )
        
      }
      {
        props.data.main && 
           
          (  <div>
                <p>Temperature: {props.data.main.temp}</p>
                <p>Humidity: {props.data.main.humidity}</p>
            </div>
          )
        
      }

      <p></p>
    </div>
  )
}
