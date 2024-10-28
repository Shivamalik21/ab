import React, { createContext, useState } from 'react'
 export const usercontext =createContext();
 


const Usercontext = ({children}) => {
    let [initial, setData] = useState([]);
    const[active,setactive]=useState([])
   
   function search(value){
    fetch(`http://api.weatherapi.com/v1/current.json?key=9c50c11dbdcf4a4ea9184819242810&q=${value}&aqi=no`)
    .then(response => response.json())   
     // one extra step
   
    .then(data => {
     
    if(data.location.name){
      
        
          setData([...initial,data])
          setactive([...active,data])
        }
        
      
        
     })
    
    .catch(error => console.error(error));
    
   }
  function remove(data){
  let ab=initial.filter((dt)=>dt!==data)
 setData(ab)
 
  }
  function get(value){
    fetch(`http://api.weatherapi.com/v1/current.json?key=9c50c11dbdcf4a4ea9184819242810&q=${value}&aqi=no`)
    .then(response => response.json())   
     // one extra step
   
    .then(data => {
     
    if(data.location.name){
        setData([...initial,data])
      
        }
     })
    
    .catch(error => console.error(error));
    


  }
   

  return (
   
   <usercontext.Provider value={{
    get,
   active,
    initial,
    remove,
    search
   }}>
{children}
   </usercontext.Provider>
  )
}

export default Usercontext
