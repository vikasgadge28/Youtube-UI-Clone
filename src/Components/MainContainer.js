import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className=" overflow-hidden mt-16 bg-white">
      <ButtonList/>
      <VideoContainer/>
    </div>
  );
};

export default MainContainer;
