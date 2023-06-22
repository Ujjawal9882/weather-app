import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { GoLocation } from "react-icons/go";

export default function InputData(props) {
  return (
    <>
    <div className='input-div'>
      <TextField id="outlined-basic" label="Input City" color='warning' variant="outlined" fullWidth InputProps={{
            endAdornment: <InputAdornment position="end" ><span className='input-icon'><GoLocation/></span></InputAdornment>,
          }} value={props.city} onChange={(e)=>props.setCity(e.target.value)} onKeyPress={props.searchCity} />
      
    </div>
    </>
    
  )
}
