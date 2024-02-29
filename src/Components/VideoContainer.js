import React, { useEffect, useState } from 'react'
import { YOUTUDE_VIDEOS_API } from '../utils/Constants';
import VideosCards from './VideosCards';
import {Link} from "react-router-dom"

const VideoContainer = () => {
const [videos, setVideos] = useState([]);


useEffect(() => {
getVideos();
}, []);

const getVideos = async () => {
  const data = await fetch (YOUTUDE_VIDEOS_API);
  const json = await data.json();
 
  setVideos(json.items)
 
};

  return (
    <div  
     className="flex flex-wrap  justify-around bg-white cursor-pointer sm:ml-24  mt-10">
    {videos.map( video => ( 
      <Link key={video.id} to= {"/watch?v=" + video.id} >
     <VideosCards   info={video} />
     </Link>
    
    ))}
 
    </div>
  )
};

export default VideoContainer;
