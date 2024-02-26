import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className=" w-48 shadow-2xl p-4 fixed bg-white mt-16 z-10">
<div className="mb-6 pb-5 border-b-[1px]">
    <ul>
       <li> <Link>Home</Link></li>
       
       <li>Shorts</li>
       <li>Subcriptions</li>
     </ul>
</div>
<div className="mb-6 pb-5 border-b-[1px]">
  <h1 className=" font-bold">Subscription</h1>
  <ul>
       <li>Gaming</li>
       <li>Live</li>
       <li>Shoping</li>
       </ul>
</div>
<div className="mb-6 pb-5 border-b-[1px]">
     <h1 className="font-bold">You </h1>
     <ul>
       <li>History</li>
       <li>Watch Later</li>
       <li>Liked Videos</li>
     
     </ul>
</div>
<div className="mb-6 pb-5 border-b-[1px]">
    <h1 className="font-bold">Explore</h1>
     <ul>
       <li>Tranding</li>
       <li>Music</li>
       <li>Shoping</li>
       <li>News</li>
       <li>Sports</li>
       <li>Gaming</li>
       <li>Live</li>
     </ul>
</div>
    </div>
  )
}

export default Sidebar;
