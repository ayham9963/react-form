import React from 'react'
import "./TagButtonStyle.css"

const TagButton = ({ title, children }) => {
 
  return (
    <div>
      {title == null || title =="" ? (
        <div></div>
      ) : (
        <button className='TagButton'>
          {title}
          {children}
        </button>
      )}  
        
    </div>
  )
}
export default TagButton