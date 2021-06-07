import react,{useState} from "react";
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';
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
    <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={jun}
          
          
        />
        <AddIcon onClick={tun}></AddIcon>
        

      </div>
      {
      nmap.map((val,index)=>{
          return  <Man sun={val}/>
      })
    }
   
    </>)
}
export default CreateNode;