import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = ({info}) => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(closeMenu());
  }, [dispatch]);
 

  return (
    <div className="flex flex-col max-w-[48rem] w-full">
    <div className="flex  ">

      <div className="mt-20 ml-20">
        <iframe
          width="680"
          className="rounded-xl"
          height="400"
          src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?&autoplay=1&mute=0"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
             
      </div>

     <div>
      <LiveChat/> 
     </div>

      </div>
      <CommentsContainer/>
    </div>
  );
};

export default WatchPage;
