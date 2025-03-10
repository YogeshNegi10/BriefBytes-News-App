import React from "react";
import ReadNavbar from "../components/ReadNavbar";

import Footer from "../components/Footer";
import News from "../components/News";

const Read = ({
  loading,
  setCatogery,
  news,
  setLang,
  setNews,
  setLoading,
  lang,
  setSearchData,
  searchNews,
  searchData,
}) => {
  return (
    <>
      <ReadNavbar
        setCatogery={setCatogery}
        setLang={setLang}
        setNews={setNews}
        setLoading={setLoading}
        lang={lang}
        setSearchData={setSearchData}
        searchNews={searchNews}
        searchData={searchData}
      />
      <News loading={loading} news={news} lang={lang} searchData={searchData} />
      <Footer />
    </>
  );
};

export default Read;
