import React, {useState, useEffect} from 'react'
import axios from 'axios'

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
if(document.getElementById("comment").value===""){
  alert("Please enter a comment");
  comment.focus();
}


  
  axios.post("http://localhost:9000/api/v1/comments/create",{  
    post,
    user,
    body:{body:document.getElementById("comment").value}
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
&nbsp; &nbsp;
        <button>&#128172;  {blog.comments.length} </button>
        <div className='flex'>
    <input type="text" name="" placeholder='Add comment.....' id="comment"  value=""/>
    <button  onClick={()=> handleComment(blog._id, "random person")}>Add</button>
    </div>
        <p>
        <div className="max-w-3xl mx-auto p-4">
  <div className="bg-white shadow rounded-lg p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Comments</h2>
 
    <div className="space-y-4">
      {blog.comments.map((item) => (
        <div
          key={item.id}
          className="p-4 bg-gray-100 rounded-md hover:shadow-lg transition-shadow duration-300"
        >
          <p className="text-gray-700">{item.body}</p>
        </div>
      ))}
    </div>
  </div>
</div>

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
