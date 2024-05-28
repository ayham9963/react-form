import React from 'react'

const Post = ({psotName ="no title" ,postBady}) => {
  return (
    <div style={{padding:"10px",border:"solid teal 5px",margin:"25px",}}>

        <h2 style={{display: 'flex', alignItems:'center',justifyContent:'center',}}>

          {psotName}
       
        </h2> 
        <hr />
        <p style={{
        display: 'flex', 
        alignItems:'center',
        justifyContent:'center',
    }}>
         {postBady}
         </p>
    </div>
  )
}
export default Post
