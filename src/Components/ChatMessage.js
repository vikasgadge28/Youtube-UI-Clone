import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    
    <div className="flex items-center hover:bg-slate-100 text-sm">
     <img
          className="h-8 mt-1 cursor-pointer"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="profile"
        />
        <span className="font-bold px-3 ">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage;
