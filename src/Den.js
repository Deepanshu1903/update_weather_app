import CreateNode from "./CreateNode"; 
import react,{useState} from 'react';
import Node from "./Node";

const Den=()=>{
    const [search,setsearch]=useState();

    const hun=(e)=>{
  
        console.log(e)
        setsearch(e);
   }
    return(
        <>
        <CreateNode/>
        
        
</>
    ) 
}  
export default Den; 