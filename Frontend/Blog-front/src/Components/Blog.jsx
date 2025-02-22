import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Like from './Like';
import Comment from './Comment';


function Blog() {
const [blogs, setBlogs]= useState([]);
const [like ,setLike] = useState([]);
const [comment, setComment]= useState([]);
// const [like ,setLike] = useState([]);

// const [unlike ,setUnLike] = useState([]);
 
const handleLike= (post,user)=>{

  axios.post("http://localhost:9000/api/v1/likes/like",{  
    post,
    user
  })
  .then((response)=>{
    setLike(response.data);
    // console.log(response.data);
  })
  .catch((error)=>{
    console.log(error);
  }
  )
  console.log("like");
}

const handleComment= (post,user)=>{

  axios.post("http://localhost:9000/api/v1/comments/create",{  
    post,
    user,
    body:"comment"
  })
  .then((response)=>{
    setComment(response.data);
    console.log(response.data);
  })
  .catch((error)=>{
    console.log(error);
  }
  )
  console.log("comment");
}


useEffect(()=>{
    const fetchblog=async()=>{
        try{
          const response = await axios.get('http://localhost:9000/api/v1/posts');
           setBlogs(response.data.posts);
          //  console.log(response.data.posts._id);
          // console.log(response.data);   
        }catch(error){
            console.log(error);
            console.log("error aa gya");
        }
    }
    fetchblog();
},[like, comment]);
console.log(blogs.likes);
// console.log (typeof(blogs.likes));

  return (
    <>   
    <div className="">    
 
    {blogs.map((blog) => (
       <div className="blog-box "  key={blog._id}>  
      <div className="blog-content">
        <div className="blog-title">{blog.title}</div>
        <div className="blog-description">{blog.body}</div>
        <br />
        <button onClick={() => handleLike(blog._id, "sakshi baklol")}>
  👍 {blog.likes.length}
</button>

        <button onClick={()=> handleComment(blog._id, "random person")}>&#128172;  {blog.comments.length} </button>
        <p>
  {blog.comments.map((items) => (
    <span key={items.id}>{items.body} <br /></span>
    
  ))}
</p>

        <br />
        <a href="#" className="read-more">Read More</a>
      </div>
     </div>  
    ))}
 
  </div>
</>

  )
}

export default Blog
