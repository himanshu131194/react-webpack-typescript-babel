import React from "react";
import { Weather } from "./weather";

const WeatherInfo: React.FC<{weather: Weather, parentChannel: (msg: string) => void}> = ({weather, children, parentChannel})=>{

    const { city, humidity, pressure, temp, temp_max, temp_min } = weather;

    return(
        <div>
            <button onClick={()=>parentChannel('Hello from child!')}>
                Say Hello to parent
            </button>
            {children}
            <h2> City: {city} </h2>
            <h2> Humidity: {humidity} </h2>
            <h2> Pressure: {pressure} </h2>
            <h2> Temp: {temp} </h2>
            <h2> Max Temp: {temp_max} </h2>
            <h2> Min Temp: {temp_min} </h2>
        </div>
    )
} 

export default WeatherInfo;