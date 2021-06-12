import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import AddIcon from '@material-ui/icons/Add';
const api = {
  key: "08d4dd43364eef51d2c438a03cc49d50",
  base: "https://api.openweathermap.org/data/2.5/"
  
}
var cardStyle = {
  display:"flex",
  width: '10px',
  height: '10px',
  borderRadius:'1600px',
  margin:"10px"
  
  }
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
          
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app warm">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            
          />
        </div>
        {(typeof weather.main != "undefined") ? (
      
        <Card style={cardStyle} className="app">
       
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <WbSunnyIcon></WbSunnyIcon>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
       
        </Card>
        
        ) : ('')}
      </main>
      <AddIcon/>
    </div>
  );
}

export default App;
