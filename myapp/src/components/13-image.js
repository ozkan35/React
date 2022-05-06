import React from 'react'
import manzara1 from "../assets/img/image1.jpg";
import manzara2 from "../assets/img/image2.jpg";
const Images = () => {
  return (
     
    <div>
        <img src={manzara1}/>
        <img src={manzara2}/>
        <img src={require("../assets/img/image3.jpg")} />  
    </div>
   
  )
}
export default Images