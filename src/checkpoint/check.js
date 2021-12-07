import React from "react";
import imaaage from '../imageInSrc.jpg'



function Check () {
    return (

        <div className = 'abbes'>
         <div style = {{border : 'solid  1px gray' , maxWidth : '100vw' , borderRadius : '10px'}}>
       <h1 className = 'title_red' > Your name here</h1>
      <br></br>
      <div  className = 'abbes2'>
      <img  src="imageInPublic.jpg " alt = 'pic' /> 
      <br></br>
      <img src= {imaaage} alt = 'pic' />
      </div>
      </div>
      <video width =  {320} height = {240} controls >
        <source src = "myVideo.mp4" type = "video/mp4" />
          </video>

        
      </div>


    )
}


export default Check


