const Post = require("../models/postModel");
const Comment= require("../models/commentModel");

exports.createComment = async(req,res)=>{
    try{
       //fetch data fro request ki body
       const {post,user,body} = req.body;

       const comment= new Comment({
        post,user,body
       });

       const savedComment = await comment.save();

       //find post by id , add new commnet to its comment array
       const updatedPost= await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}},{new:true})
       .populate("comments") // populate the comment arraty eith comment  
       .exec();
       res.json({
        post:updatedPost,
       })  ;
       }

    catch(error){
      return res.status(500).json({
        error:"Error while creating comments",
      });
    }
};