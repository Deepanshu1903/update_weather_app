import react from "react";
import Card from '@material-ui/core/Card';
const Man=(props)=>{
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }

      var cardStyle = {
        display: 'block',
        width: '25vw',
        transitionDuration: '0.3s',
        height: '25vw',
        borderRadius:'20px',
        magin:"80px",
        padding:"30px"
        }     


return(
<div style={{"margin":"80px"}}>
         
{(typeof props.sun.main != "undefined") ? (
<>
  <Card style={cardStyle} className="app">
 
    <div className="location-box">
      <div className="location">{props.sun.name}, {props.sun.sys.country}</div>
      <div className="date">{dateBuilder(new Date())}</div>
    </div>
   
    <div className="weather-box">
      <div className="temp">
        {Math.round(props.sun.main.temp)}°c
      </div>
      <div className="weather">{props.sun.weather[0].main}</div>
    </div>
 
  </Card>


</>                
  ) : ('')}
  
  </div>
)
}
export default Man;