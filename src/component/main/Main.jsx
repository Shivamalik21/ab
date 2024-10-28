import React, { useContext, useRef } from 'react'
import { usercontext } from '../../store/Usercontext'
import List from './List'
import { MdDelete } from "react-icons/md";

const Main = () => {
  
  const value=useContext(usercontext)

 const inputValue=useRef("")
function searchValue(){
  value.search(inputValue.current.value)
  inputValue.current.value=""
 
}
  return (
    <div >
      <div className='search'>
        <input ref={inputValue} type='text' placeholder='search city'/>
        <button onClick={searchValue}>search</button>
      </div>
      <div className='main'>
     
        <ul className='mainTable'>
            <li>City</li>
            <li>Decription</li>
            <li>Temperature</li>
            <li>Pressure</li>
            <li>Wind speed</li>
            <li><MdDelete /></li>
         </ul>
         {value.initial.length!==0?<List dm={value}/>:<div style={{width:"100%", textAlign:"center"}}><h1>No data</h1></div>}

   
    
      </div>
    </div>
  )
}

export default Main
