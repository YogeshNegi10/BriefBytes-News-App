import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Read from "./pages/Read";

const App = () => {
  const [catogery, setCatogery] = useState("general");
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [searchData, setSearchData] = useState("");

  const fetchnews = async (catogery) => {

      
    if(catogery){
      setSearchData('')
    }

    

    setLoading(true);
    let url = ` https://newsapi.org/v2/everything?q=${
      searchData ? searchData : catogery.toLowerCase()
    }&language=${lang}&latest&apiKey="1075701ed6e94515be8e5302a55b1af7"`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
    
  };

  const searchNews = async () => {
    if (searchData == "") {
      return;
    }

    setLoading(true);
    let url = `https://newsapi.org/v2/everything?q=${searchData}&language=${lang}&latest&apiKey="1075701ed6e94515be8e5302a55b1af7"
    `;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchnews(catogery);
  }, [catogery, lang]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/read"
            element={
              <Read
                loading={loading}
                setCatogery={setCatogery}
                news={news}
                setLang={setLang}
                setNews={setNews}
                setLoading={setLoading}
                lang={lang}
                searchData={searchData}
                setSearchData={setSearchData}
                searchNews={searchNews}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
