import React, {useState, useEffect} from 'react'
import axios from 'axios'
function Blog() {
const [blogs, setBlogs]= useState([]);
    
useEffect(()=>{
    const fetchblog=async()=>{
        try{
          const response = await axios.get('http://localhost:9000/api/v1/posts');
          setBlogs(response.data.posts);
          console.log(response.data);   
        }catch(error){
            console.log(error);
            console.log("error aa gya");
        }
    }
    fetchblog();
},[]);
console.log(blogs);
  return (
    // <>
    //    <div className="blog-box">
    //  {blogs.map((blog)=>{
    //      <div className="blog-content">
    //         <div className="blog-title">{blog.title}</div>
    //         <div className="blog-description">{blog.body}</div>
    //         <br />
    //         <a href="#" className="read-more">Read More</a>
    //     </div>
        
    //  })}
       
    // </div>
    // </>
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gray-100">
  <div className="blog-box">

    {blogs.map((blog) => (
        
      <div className="blog-content" key={blog.id}>
        <div className="blog-title">{blog.title}</div>
        <div className="blog-description">{blog.body}</div>
        <br />
        <a href="#" className="read-more">Read More</a>
      </div>
    ))}
  </div>
  </div>
</>

  )
}

export default Blog
