import React from 'react'
import TagButton from './TagButton'

const SideMenu = () => {
  return (
    <div style={{ margin:"25px", border:"solid teal 5px"}}>
      <TagButton title="اخر المقالات">
        <div>
          <span>😂😂😂</span>
        </div>
        </TagButton>
      <TagButton   title="الاكثر قراءة ">
        <div>
          <img style={{width:"100px"}} src="https://th.bing.com/th/id/R.bf3bd9c9cb925b83b5b9c152f553944e?rik=eQLlULI9ImxQKw&pid=ImgRaw&r=0" alt="" />
        </div>
        </TagButton>
      <TagButton  title="مميز">
        <h1>Click Me</h1>
        <span>👉🏻</span>
        </TagButton>
        <TagButton title="hello"/>
      
    </div>
  )
}
export default SideMenu