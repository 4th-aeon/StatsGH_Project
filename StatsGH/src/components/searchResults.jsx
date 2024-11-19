import { Link, useLocation } from "react-router-dom";
import NewsCard from "./newsCard";
import { useEffect, useState } from "react";
import AdvertisementSection from "./adsComponents";

const SearchResultsList = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    // console.log(location.state?.message);
    setResults(location.state?.message);
    setQuery(location.state?.query?.toUpperCase());
  }, [location]);

  return (
    <>
      <main className="overflow-x-hidden pt-3 px-3 md:px-[9%]">
        {/* Topic Heading */}
        <p className="text-xl font-bold font-EB pb-2 border-b border-[#AEAEAE] border-dotted ">
          {" "}
          SEARCH: {query}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 pt-6 gap-4">
          {results.map((result, index) => (
            <div
              key={result.id}
              className={`
        col-span-1 
        ${index % 3 === 0 ? "lg:col-span-2" : ""} 
        ${index % 3 === 1 ? "lg:col-span-2" : ""} 
        ${index % 3 === 2 ? "lg:col-span-2" : ""} 
        ${index % 3 === 3 ? "lg:col-span-2" : ""}
      `}
            >
              <NewsCard articleData={result} />
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {/* <div className="flex justify-between mt-8 md:mt-8 mb-12">
          <button
            onClick={handlePreviousPage}
            disabled={!hasPreviousPage}
            className={`${
              hasPreviousPage ? "flex" : "hidden"
            } bg-[#cc0700] text-white rounded-full px-4 py-2 font-semibold text-sm cursor-pointer`}
          >
            &lt;&lt; Previous
          </button>
          <span className="text-lg font-EB font-medium">Page {pagination}</span>
          <button
            onClick={handleNextPage}
            disabled={!hasNextPage}
            className={`${
              hasNextPage ? "flex" : "hidden"
            } bg-[#cc0700] text-white rounded-full px-4 py-2 font-semibold text-sm cursor-pointer`}
          >
            More articles &gt;&gt;
          </button>
        </div> */}

        {/* Advertisement Placeholder */}
        <div className="mt-8">
          <AdvertisementSection />
        </div>
      </main>
    </>
  );
};

export default SearchResultsList;
