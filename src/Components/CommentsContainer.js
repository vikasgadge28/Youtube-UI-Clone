import React from 'react'
import Comment from './Comment'


const commentsData = [
  {
    name: "Vikas Gadge",
    text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [{
      name: "Vikas Gadge",
      text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      replies: [{
        name: "Vikas Gadge",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [{
          name: "Vikas Gadge",
          text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          replies: [{
            name: "Vikas Gadge",
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          }],
        }],
      }],
    }],
  },
  {
    name: "Vikas Gadge",
    text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [{
      name: "Vikas Gadge",
      text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      replies: [{
        name: "Vikas Gadge",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [{
          name: "Vikas Gadge",
          text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          replies: [],
        }],
      }],
    }],
  },
  {
    name: "Vikas Gadge",
    text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "Vikas Gadge",
    text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [{
      name: "Vikas Gadge",
      text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      replies: [{
        name: "Vikas Gadge",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [{
          name: "Vikas Gadge",
          text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          replies: [{
            name: "Vikas Gadge",
            text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [],
          }],
        }],
      }],
    }],
  },
  {
    name: "Vikas Gadge",
    text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [{
      name: "Vikas Gadge",
      text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      replies: [{
        name: "Vikas Gadge",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      }],
    }],
  }

]

const CommentList =({comments} ) =>{
  return comments.map((comment, index) =>(
<div key={index}>
      <Comment  data={comment}/>
     <div className="pl-8 border border-l-black">
      <CommentList comments={comment.replies}/>
     </div>

</div>
    ));
}


const CommentsContainer = () => {
  return (
    <div className="ml-20 ">
      <h1 className="  text-xl font-bold">Comments:</h1>
      <CommentList comments = {commentsData}/>
    </div>
  )
}

export default CommentsContainer;
