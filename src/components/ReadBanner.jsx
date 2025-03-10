import React from "react";
import appstore from '../assests/appstore.png'
import playstore from '../assests/playstore.png'



const ReadBanner = () => {
  return (
    <div className="w-full px-10">
      <div className="banner p-4 md:px-8  md:max-w-[900px]  text-white font-normal  mx-auto md:flex  items-center justify-between  py-3 mt-10 bg-[#f44336]">
        <div className="text md:w-full text-sm">
          <p>For the Best Experience use <a href="" className=" underline">BriefBytes</a> app on Your Smartphone</p>
        </div>
        <div>
          <div className="btn flex gap-5 mt-4 justify-center  items-center">
              
              <button className=" w-32"><img src={playstore} alt="" /></button>
              <button className=" w-32"><img src={appstore} alt="" /> </button>
          
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default ReadBanner;
