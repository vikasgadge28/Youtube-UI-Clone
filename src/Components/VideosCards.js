import React from 'react'

const VideosCards = ({info}) => {
 
   const {snippet, statistics}= info;
   const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className=" mt-5 w-96 shadow-xl ">
      < img className="rounded-xl w-96" src={thumbnails.medium.url} alt="video"  />
      <ul>
        <li className=" font-bold w-96 " >{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount + " views"}</li>
      </ul>
    </div>
  );
};

export default VideosCards;
