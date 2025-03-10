import React from "react";
import appstore from "../assests/appstore.png";
import playstore from "../assests/playstore.png";

const HomeBanner = () => {
  return (
    <div className=" h-screen w-2/3 mx-auto md:mt-6">
      <div className="header grid grid-cols-1 md:grid-cols-2 justify-between gap-16 items-center  mx-auto px-5  h-screen ">
        <div className="left ">
          <div className="image">
            <img
              src="	https://inshorts.com/dist/images/home_page/main_india@2x.jpg"
              alt=""
              className=" h-70 "
            />
          </div>
        </div>
        <div className="">
          <h1 className=" text-blue-400 text-2xl md:text-3xl  mb-6  ">
            Stay informed in 60 words.
          </h1>

          <p className=" text-1xl">
            We understand you don’t have time to go through long news articles
            everyday. So we cut the clutter and deliver them, in 60-word shorts.
            Short news for the mobile generation.
          </p>
          <div className="btn flex gap-2 mt-4 mb-4">
            <button className=""><img src={appstore} /></button>
            <button className=""><img src={playstore} /></button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
