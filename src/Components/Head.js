import React, { useState, useCallback, useEffect } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOUTUBE_SEARCH_API } from '../utils/Constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      if (!data.ok) {
        throw new Error('Failed to fetch suggestions');
      }
      const json = await data.json();
      setSuggestions(json[1]);
      // Update cache
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error('Error fetching suggestions:', error.message);
      // Handle error (e.g., display a message to the user)
    }
  };

  const toggleMenuHandler = useCallback(() => {
    dispatch(toggleMenu());
  }, [dispatch]);

  return (
    <div className="grid grid-flow-col w-full fixed bg-white pb-6 z-10">
      {/* Menu Icons */}
      <div className="flex h-7 col-span-1 ml-5 mt-4 ">
        <img
          onClick={toggleMenuHandler}
          className="cursor-pointer hidden sm:block"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />
        <img
          className="sm:mx-5 h-5 mt-1 cursor-pointer"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-logo-png.png"
          alt="logo"
        />
      </div>

      {/* Search Bar */}
      <div className=" hidden sm:block">
        <div>
          <div className="flex h-6 col-span-10 mx-20 mt-3">
            <input
              className="border border-gray-300 w-[33rem] px-5 ml-20 h-10 rounded-l-3xl shadow-inner placeholder:text-gray-500 placeholder:pl-5 text: pl-[3.4rem]"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            {/* Search Button */}
            <button className="border border-gray-300 px-4 h-10 rounded-r-3xl bg-gray-100 shadow-inner cursor-pointer">
              <img
                className="h-7 mt-1 w-7 p-1"
                src="https://icons.veryicon.com/png/o/education-technology/educational-institution-icon/search-246.png"
                alt=""
              />
            </button>

            {/* Microphone Icon */}
            <img
              className="ml-4 h-10 border border-gray-100 bg-slate-100 rounded-3xl p-2 cursor-pointer"
              src="https://static.thenounproject.com/png/3199011-200.png"
              alt="mic"
            />
          </div>
          {/* Search suggestions */}
          {showSuggestions && (
            <div className="fixed bg-slate-50  ml-[10.1rem] mt-4 w-[33rem] rounded-lg shadow-2xl drop-shadow-2xl pb-5 ">
              <ul>
                {suggestions.map((s) => (
                  <li key={s} className="flex bg-slate-50  p-1 hover:bg-slate-200 cursor-default">
                    <img
                      className="h-7  w-7 p-1 ml-2 mr-3"
                      src="https://icons.veryicon.com/png/o/education-technology/educational-institution-icon/search-246.png"
                      alt=""
                    />{' '}
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* User Icons */}
      <div className="flex h-8 col-span-1 gap-2 mt-4 justify-end mr-2 sm:mr-8">
        <img
          className="h-9 hidden sm:block cursor-pointer"
          src="https://static.thenounproject.com/png/5109176-200.png"
          alt="create"
        />
        <img
          className="h-7 hidden sm:block mt-1 cursor-pointer"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/359/770/small/bell-icon-free-vector.jpg"
          alt="bell"
        />
        <img
          className="h-8 mt-1 cursor-pointer"
          src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Head;
