import './FormStyle.css'
import React from 'react'

const Model = ({isVisible , errorMessage = null}) => {
    if(isVisible){
        return (
    <div id='model'>
      <div id='model-content'>
       <h1 style={{color:errorMessage != null ? "red" : "green"}}>
        {errorMessage != null 
            ? errorMessage 
            : "the form has been successfully submitted"}
        </h1>
      </div>
    </div>
  )
    }else{
        return null
    }
  
}

export default Model
