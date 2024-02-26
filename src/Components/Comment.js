import React from 'react'


const Comment = ({data}) => {
    const {name, text , replies} = data;
  return (
    <div className=" flex mt-2 gap-3 bg-slate-100 p-3 text-sm rounded-lg  ">

    <div className="">
    <img className=" w-10 h-10 "
       src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        alt="user" />
    </div>
    <div className="">
             <p className=" font-semibold ">@{name}</p>
             <p>{text}</p>
    </div>

    </div>
  )
}

export default Comment
