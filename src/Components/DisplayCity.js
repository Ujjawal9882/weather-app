import React from 'react'
import { BiStreetView } from "react-icons/bi";

export default function DisplayCity(props) {
  
  return (
    <div className='display-city-div'>
        <p className="search-display">{props.city}</p>
        <p className="city-display mb-0"><BiStreetView/> {props.data && props.data.name}</p>
        <p className="country-display">Country: <span className='country-display-inner'>{props.data.sys && props.data.sys.country}</span></p>
    </div>
  )
}
