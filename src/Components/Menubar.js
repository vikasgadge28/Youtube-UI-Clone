import React from 'react'

const Menubar = () => {
  return (
    <div className=" w-24 h-full shadow-xl mt-12 flex flex-col items-center">\

   <div className="w-20 p-5 py-4 text-xs flex flex-col items-center  rounded-xl  hover:bg-slate-100"><img src="https://pixsector.com/cache/59f358af/avfe23a6b11d1ff4752fd.png" alt="" />
   Home</div>

   <div className="w-20 p-5 py-4 rounded-xl  hover:bg-slate-100 text-xs flex flex-col items-center"><img src="https://qph.cf2.quoracdn.net/main-qimg-c74aff21c115bb4fec316d43686321f2" alt="" />
   Shorts</div>

   <div className="w-20 p-7 py-6 hover:bg-slate-100 text-xs  rounded-xl  flex flex-col items-center "><img className="mb-2" src="https://cdn.icon-icons.com/icons2/3237/PNG/512/menu_youtube_social_media_subs_subscription_icon_197393.png" alt=""/>
   Subscriptions</div>

   <div> <img src="" alt="" /></div>
    </div>
  )
}

export default Menubar;
