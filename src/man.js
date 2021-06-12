import react from "react";
import Card from '@material-ui/core/Card';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

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
        width: '185px',
        transitionDuration: '0.3s',
        height: '285px',
        borderRadius:'20px',
        magin:"30px",
        padding:"30px",
        boxShadow:" 0px 5px rgba(0, 0, 0, 0.2)"

        }     


return(
  <>
 
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
     <div class="cloud">
       {
         (props.sun.weather[0].main=="Clouds")?
         <CloudIcon style={{"color":"rgb(0, 81, 255)",
         "width":"50px",
         "height":"50px"
               
        
        }}></CloudIcon>:
        <WbSunnyIcon
        style={{"color":"rgb(255, 115, 0)",
         "width":"50px",
         "height":"50px"
               
        
        }}
        
        ></WbSunnyIcon>
       }
      
       </div>    

      <div className="weather">{props.sun.weather[0].main}</div>
    </div>
 
  </Card>


</>                
  ) : ('')}
  
  </div>
</>
)

}
export default Man;

