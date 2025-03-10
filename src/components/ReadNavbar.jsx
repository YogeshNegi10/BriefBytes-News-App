import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import logo from "../assests/logo.png";

const catogeries = [
  "India",
  "Bussiness",
  "Politics",
  "Sports",
  "Technology",
  "Startups",
  "Entertainment",
  "Hatke",
  "International",
  "Automobile",
  "Science",
];

const catogeriesInHindi = [
  "भारत",
  "व्यापार",
  "राजनीति",
  "खेल",
  "प्रौद्योगिकी",
  "स्टार्टअप्स",
  "मनोरंजन",
  "हटके",
  "अंतरराष्ट्रीय",
  "ऑटोमोबा",
  "विज्ञान",
];

const ReadNavbar = ({
  setCatogery,
  setLang,
  setNews,
  setLoading,
  lang,
  searchData,
  setSearchData,
  searchNews,
}) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(true);

  const handleCLick = (catogery, i) => {
    catogeries.forEach((li, index) => {
      if (index === i) {
        setCatogery(li);
      }
    });
    setShow(!show);
  };

  const handleEnglish = (lang) => {
    setLang(lang);
    setActive(true);
    setShow(!show);
  };
  const handleHindi = (lang) => {
    setLang(lang);
    setActive(false);
    setShow(!show);
  };

  const search = (e) => {
    e.preventDefault();
    searchNews();
    console.log(searchData);
  };

  return (
    <>
      {/* ------------------------------------------- Sidebar -------------------------------------------- */}
      <div className=" flex overflow-hidden relative  z-30 bg-blue-200 ">
        <div
          className={` -translate-x-full fixed top-0 left-0 bg-[#303036] text-white w-56 h-full overflow-y-auto transition-transform transform ${
            show ? " translate-x-0" : ""
          }  ease-in-out duration-300`}
          id="sidebar"
        >
          <div className="p-4">
            <div className="flex mt-6 mb-5 justify-center ">
              <button
                onClick={() => handleEnglish("en")}
                className={`${
                  active ? " bg-[#808290]" : ""
                } border px-3 py-1  `}
              >
                English
              </button>
              <button
                onClick={() => handleHindi("hi")}
                className={`${
                  active ? "" : "bg-[#808290]"
                } border px-6 py-1 border-l-0 `}
              >
                हिंदी
              </button>
            </div>

            <hr className=" mb-3" />

            <span className=" text-sm text-[#7d8190]">Categories</span>
            <ul className="mt-3">
              {active
                ? catogeries.map((catogery, i) => {
                    return (
                      <li
                        className=" font-[200] hover:bg-[#44444D]"
                        key={catogery}
                      >
                        <button
                          onClick={() => handleCLick(catogery, i)}
                          to="/read"
                          className="pl-6 pr-7 py-2 block "
                        >
                          {catogery}
                        </button>
                      </li>
                    );
                  })
                : catogeriesInHindi.map((catogery, i) => {
                    return (
                      <li
                        className=" font-[200] hover:bg-[#44444D]"
                        key={catogery}
                      >
                        <NavLink
                          onClick={() => handleCLick(catogery, i)}
                          to="/read"
                          className="pl-6 pr-7 py-2 block "
                        >
                          {catogery}
                        </NavLink>
                      </li>
                    );
                  })}

              <BiX
                size={30}
                onClick={() => {
                  setShow(!show);
                }}
                className=" cursor-pointer absolute top-1 right-2"
              />
            </ul>
          </div>
        </div>
      </div>

      {/* ------------------------------------------ Navbar ------------------------------------------- */}

      <div className="header sticky top-0 bg-slate-50 shadow-lg ">
        <nav className="shadow-lg md:h-24 h-32 flex md:justify-between justify-around items-center px-6 flex-wrap ">
          <div className=" flex items-center gap-2 ">
            <BiMenu
              className=" cursor-pointer"
              size={30}
              onClick={() => {
                setShow(!show);
              }}
            />
            <span className=" hidden md:block">Menu</span>
          </div>

          <div className="flex justify-center items-center">
            <img src={logo} alt="" className=" h-14" />
            <NavLink to="/">
              <h1 className=" text-2xl text-center">"BriefBites"</h1>
            </NavLink>
          </div>
          <form action="" onSubmit={search}>
            <div className="relative w-[300px] mb-3 md:mb-0 ">
              <input
                className=" flex-1 appearance-none border-2 pl-4 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none  focus:border-[#f44336] focus:shadow-outline text-sm"
                id="username"
                type="text"
                placeholder="Search News..."
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
              />

              <div className="absolute right-4 cursor-pointer inset-y-0 flex items-center">
                <svg
                  onClick={search}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </form>
        </nav>
      </div>
    </>
  );
};

export default ReadNavbar;
