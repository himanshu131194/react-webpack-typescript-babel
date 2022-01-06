// import React, { Component, ReactNode } from 'react';

// interface State {
//    userName: string,
//    imageUrl: string
// }

// export default class App extends Component{
//     state: State = {
//        userName: 'John',
//        imageUrl: 'https://picsum.photos/600/600'
//     }

//     render(): ReactNode {
//         return (
//           <div>
//            <h1>{this.state.userName}</h1>
//            <img src={this.state.imageUrl}/>
//         </div>
//         )
//     }
// }
// import React, { useState } from "react";

// interface State {
//     userName: string,
//     imageUrl: string 
// }

// const App: React.FC = ()=>{
//    const [ state, setState ] = useState<State>({
//       userName: 'John',
//       imageUrl: 'https://picsum.photos/600/600'
//    });

//    const myStyles = {
//       margin: 40
//    }
//    return <div style={myStyles} onClick={()=>setState({userName: 'John',
//    imageUrl: 'https://picsum.photos/600/600'})}>
//             <h1>{state.userName}</h1>
//             <img src={state.imageUrl}/>
//          </div>

// }

// export default App;

import React, { ChangeEvent, useState, useEffect, FormEvent } from "react";
import WeatherInfo from './weather-info';

export interface Weather{
   city: string,
   humidity: number,
   pressure: number,
   temp: number,
   temp_min: number,
   temp_max: number
}

const App: React.FC = ()=>{

   const has = (value: any): value is boolean => !!value;

   const [city, setCity] = useState('London');
   const [weather, setWeather] = useState<Weather | null>(null);
   const [msgFromChild, setMsgFromChild] = useState('');

   const getMsgFromChild = (msg: string) => setMsgFromChild(msg);

   const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='; 
   const suffix = "&units=imperial&appid=84a11045c5320abf0b94f83a8c259e3b";
   
   const getWeather = async (location: string)=>{
      const response = await fetch(baseUrl+location+suffix);
      console.log(response);
      if(response.status === 200){
         const jsonWeather = await response.json();
         const cityTemp: Weather = jsonWeather.main;
         cityTemp.city = jsonWeather.name;
         setWeather(cityTemp);
      }else{
         setWeather(null);
      }
      const jsonWeather = await response.json();
      console.log(jsonWeather);
   }

   useEffect(() => { getWeather(city) }, []);

   const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
      setCity(event.target.value);
   } 

   const handleSubmit = (event: FormEvent)=>{
      event.preventDefault();
      getWeather(city);
   }

   return(
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter city" onChange={handleChange}/>
            <button>Get Weather</button>
            <h2>City : {city}</h2>
            {weather && <h2>Temperature: {weather.temp}F</h2>}
         </form>
         {msgFromChild}
         {
            has(weather)
            ? <WeatherInfo weather={weather} parentChannel={getMsgFromChild}>
                <strong>Hello! from parenet component</strong>
              </WeatherInfo>
            : <h2>No weather available</h2>
         }
      </div>
   )
}

export default App;
