import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("")
    let [error, setError] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather?"
    const API_KEY = "e8e1acf480d7924135a2e0e4c770a951"

    let getWheatherInfo = async() => {
      try {
        let responce = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`)
      let jsonResponce = await responce.json()
      console.log(jsonResponce)
      let result = {
        city : city ,
        temp : jsonResponce.main.temp,
        tempMin : jsonResponce.main.temp_min,
        tempMax : jsonResponce.main.temp_max,
        humidity : jsonResponce.main.humidity,
        feelsLike : jsonResponce.main.feels_like,
        weather : jsonResponce.weather[0].description,
      }
      console.log(result)
      return result
   
      } catch (err) {
        throw err
      } }


    let handleChange = (event) => {
        setCity(event.target.value)
    }

    let handleSubmit = async (evt) => {
      try {
          evt.preventDefault();
          console.log('city : ${city}')
          setCity("")
          let newInfo = await getWheatherInfo()
          updateInfo(newInfo)
          setError(false)
      } catch (error) {
          setError(true)
      }
  }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" 
            required
            value={city}
            onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type='Submit'>Search</Button> 
            {error && <p style={{color:"red"}}>No such place found in API</p>}
            </form>
        </div>
    )
}