import React, { useContext, useState } from 'react'
import { usercontext } from '../../store/Usercontext'

let arr=["london","Las vegas","Los Angles","new York"]
const Sidebar = () => {
  const context=useContext(usercontext)
  const[list,setList]=useState([])
  const [index,setindex]=useState(0)
 
 function add(){
  
 if(!list.includes(arr[index])){
  setList([...list,arr[index]]);
  context.get(arr[index])
  if(index<3){
    setindex(index+1)}
 }else{

   if(index<3){
    setindex(index+1)
  }
  
 }

}
  return (
    <div className='sidebar'>
        <button onClick={()=>list.length<5?add():null}>Get weather</button>
        
      <ul>
        <h2>City</h2>
        <li>
            London
        </li>
        <li>
            Las Vegas
        </li>
        <li>
          Los Angeles
        </li>
        <li>
            New York
        </li>
      </ul>

      
    </div>
  )
}

export default Sidebar
