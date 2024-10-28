import React,{ useState} from 'react'
import { MdDelete } from "react-icons/md";
const List = ({dm}) => {
  
   const [text,settext]=useState()
  
  return (
    dm.initial.map((data)=>{
  
 return<ul key={data.location.name} className={`dataList ${dm.active.includes(data)?"bgcolor":null}`}   >
   
<li>{data.location.name}</li>
<li><input    onChange={(event)=>{settext(event.target.value)}}  defaultValue={data.current.condition.text} value={text}  /></li>
<li>{data.current.temp_f}</li>
<li>{data.current.pressure_in}</li>
<li>{data.current.wind_kph}</li>
<li onClick={()=>dm.remove(data)} style={{cursor:"pointer"}}><MdDelete /></li>
   </ul>
  
}))
}


export default List
