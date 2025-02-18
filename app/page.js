"use client";

import { useState, useEffect, useRef } from "react";
import Datafetch from "./components/Datafetch";
import Card from "./components/Card";
import ToggelBtn from "./components/ToggelBtn";

export default function Home() {
  //Hold City Name That send as prop to <Datafetch />
  const [city, setCity] = useState("");

  //Confirm that user has submitted Query
  const [submit, setSubmit] = useState(false);

  // get data from local storage
  const [data, setData] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("weatherData"));
    if (items) {
      setData(items);
    }
  }, []);

  //Target search input field
  const inputRef = useRef();

  //Clear input after submitting Query
  useEffect(() => {
    inputRef.current.value = "";
  }, [submit]);

  return (
    <div>
      <ToggelBtn/>
      <div className="flex flex-col items-center justify-center min-h-screen bg-foreground">
        <h1 className="text-4xl font-bold mb-4 text-background">Weather App</h1>
        <div className="flex ">
          {data.map((data, index) => (
            <Card
              key={index}
              cityName={data.city}
              temperature={data.temp}
              weather={data.weather}
              humidity={data.humidity}
              windSpeed={data.wind}
              pressure={data.pressure}
            />
          ))}
        </div>
        <div className="flex">
          <label
            html-for="search-dropdown"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Your city
          </label>
          <div className="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Enter a city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
                setSubmit(false);
              }}
              ref={inputRef}
              required
            />
            <button
              className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                setSubmit(true);
                console.log(city); //debug
              }}
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
        <div className="mt-4 h-[400px]">
          {submit && (
            <Datafetch city={city} />
          )}
        </div>
      </div>
    </div>
  );
}
