import ReadBanner from "./ReadBanner";
import SkeletonPost from "./SkeletonPost";

const News = ({ loading, news, lang }) => {


  
    
  return (
    <>
      <ReadBanner key={news.id} />

      {loading ? (

            [...Array(8).keys()].map((i)=> <SkeletonPost key={i} />)
      ) : (
        news && news.length === 0 ? (
            <div className="flex flex-col justify-center items-center p-8">
               
               <SkeletonPost key={news.id} />
              
               <h1 className=" text-1xl">No News Available in {lang === 'en' ? 'English' : "Hindi" } or Try to Switch to {lang === 'en' ? 'Hindi' : "English" } </h1>

            </div>
        ):
      
        news &&  news.filter(
            (news) => news.author !== null &&  news.content !== "[Removed]" 
          )
          .map((news) => {
            
            return (
              <div className=" px-10" key={news.id}>
                <div className=" banner max-w-[900px] w-full text-white font-normal  mx-auto flex items-center justify-between px-4 py-2 m-6  shadow-lg">
                  <div className=" grid-flow-col-1 md:grid grid-cols-2  gap-y-10 gap-x-6 items-start p-3">
                    <img
                      src={
                        news.urlToImage
                          ? news.urlToImage
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyjrivqzSKLbfF5q8NmGBO8Q84N6ZK1kH_A&s"
                      }
                      className="mb-6  shadow-md rounded-lg bg-slate-50 w-full h-full  sm:mb-0 xl:mb-6 xl:w-full"
                    />

                    <div className=" sm:ml-6 xl:ml-0">
                      <h3 className="mb-1 text-slate-900 font-semibold">
                        <span className="mb-1 block text-sm leading-6 text-indigo-500">
                          {news.author}
                        </span>
                        {news.title}
                      </h3>
                      <div className="prose prose-slate prose-sm text-slate-600">
                        <p>{news.description}</p>
                      </div>
                      <a
                        className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                        href={news.url}
                        target="_blank"
                      >
                        Read more at {news.source.name}
                        <svg
                          className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                          width="3"
                          height="6"
                          viewBox="0 0 3 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M0 0L3 3L0 6"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
      )}
    </>
  );
};

export default News;


