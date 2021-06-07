import react,{useState} from "react";
import CreateNode from "./CreateNode";
import Card from '@material-ui/core/Card';
import AddIcon from '@material-ui/icons/Add';

const Node=(props)=>{
   const[cat,setcat]= useState();

    const yun=()=>{
         props.searcho(cat);
    }
    const tun=(event)=>{
   
        setcat(event.target.value);
     }
    return(
        <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Search..."
          onChange={tun}
          
          
        />
        <AddIcon className="add" onClick={yun}></AddIcon>

      </div>
    )
}
export default Node;
