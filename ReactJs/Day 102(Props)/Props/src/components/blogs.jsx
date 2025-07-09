import React from 'react'
import "./blogs.css"
const Blogs = (props) => {
     return (
          <div>
               <h1>{props.title}</h1>
               <p>{props.content}</p>
          </div>
     )
}

export default Blogs
