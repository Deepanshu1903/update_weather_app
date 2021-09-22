import react,{useState} from "react";
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Man from "./man";




const CreateNode=(props)=>{
    const [target,settarget]=useState("");
    const [node, setnode] = useState("");
    const[nmap,setnmap]=useState([]);
      const [umap,setumap]=useState([]);    
    const jun=(event)=>{
       settarget(event.target.value);
       
    }
    
    const tun=()=>{
        

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${target}&units=metric&appid=08d4dd43364eef51d2c438a03cc49d50`)
    .then(res => res.json())
    .then(result => {
      setnode(result);
      settarget("");
      
      
      console.log(result);
      
    });
    setnmap((prev)=>{
        console.log(prev);
           return [...prev,node];
       
       })
}


return(
    <>
    
    
           <TextField 
          type="text"
           class="app1"
          placeholder="Search..."
           
          onChange={jun}
          
          
        />
        <Button onClick={tun} variant="outlined" color="primary" style={{marginLeft:"650px",marginTop:"20px"}} ><AddIcon  ></AddIcon></Button>
        <br/>
        <br/>
        

      
   
   
      {

      nmap.map((val,index)=>{
     
          return (
              
          <div style={{"float":"left","margin":"20px"}}> 
          <Man sun={val}/>
    </div>
          )
         
          
      })
      
    }
 
   
    
    
   
    </>)
}
export default CreateNode;