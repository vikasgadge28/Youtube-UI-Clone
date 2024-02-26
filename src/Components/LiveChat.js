import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import ChatMessage from './ChatMessage';

const LiveChat = () => {
const [liveMessage, setLiveMessage] = useState("")
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: makeRandomMessage(20),
      }));
    }, 1200);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
    <div className="flex flex-col-reverse mt-20 rounded-lg border border-black w-[22rem] h-[30rem] ml-10 overflow-y-scroll">
      {chatMessages.map((message, index) => (
        <ChatMessage key={index} name={message.name} message={message.message} />
      ))}
    </div>
    <form className="w-[22rem] p-2 ml-10 border border-black"
    onSubmit={(e)=>{
      e.preventDefault();
      dispatch(
        addMessage({
          name: "Vikas Gadge",
          message: liveMessage
        })
       );
       setLiveMessage(" ")
    }}>
      <input 
      className=" w-64 p-2  border border-black" 
       value={liveMessage}
       onChange={(e)=> {setLiveMessage(e.target.value);
       }}
       placeholder='Say Somthing...' 
       type="text" />
      <button className=" px-4 bg-slate-200 rounded-lg">Send</button>
    </form>

    </div>
  );
};

export default LiveChat;
