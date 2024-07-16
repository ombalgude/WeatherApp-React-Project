import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'


export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Pune" ,
        feelsLike : 24.84 ,
        humidity : 47 ,
        temp : 25.05 , 
        tempMax : 25.08 ,
        tempMin : 25.01 ,
        weather : "haze",
    })

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo)
    }

    return(
        <div style={{textAlign : "center"}}>
            <h3>Weather App</h3>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}