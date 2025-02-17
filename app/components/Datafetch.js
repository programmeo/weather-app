"use client";

import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Datafetch({ city }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState(() => {
    const data = localStorage.getItem("weatherData");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);

        //Get New Data
        const newData = {
          city: city,
          temp: data.main.temp,
          weather: data.weather[0].main,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          pressure: data.main.pressure,
        };

        setStore((prevStore) => {
          const filteredStore = prevStore.filter(
            (item) => item.city.toLowerCase() !== city.toLowerCase()
          );
          const newStore = [...filteredStore, newData];

          //save in local storage
          localStorage.setItem("weatherData", JSON.stringify(newStore));
          
          return newStore;
        });
      })
      .catch((error) => console.error("Error fetching data:", error));

    console.log(process.env.NEXT_PUBLIC_API_KEY || "No API key found"); //debug
  }, [city]);

  return (
    <div className="flex justify-center items-center min-h-[400px] p-4">
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="w-full max-w-md">
          {data.main ? (
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <h1 className="text-4xl font-bold tracking-wider uppercase mb-2">{city}</h1>
                  <p className="text-6xl font-bold mb-4">{Math.round(data.main.temp)}°F</p>
                  <p className="text-xl font-semibold">{data.weather[0].main}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-sm opacity-70">Humidity</p>
                    <p className="text-xl font-bold">{data.main.humidity}%</p>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-sm opacity-70">Wind Speed</p>
                    <p className="text-xl font-bold">{data.wind.speed} m/s</p>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-sm opacity-70">Pressure</p>
                    <p className="text-xl font-bold">{data.main.pressure} hPa</p>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-sm opacity-70">Feels Like</p>
                    <p className="text-xl font-bold">{Math.round(data.main.feels_like)}°F</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center p-4 bg-red-100 rounded-lg">
              <p className="text-red-600 font-medium">City not found in this universe</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

Datafetch.prototype = {
  city: PropTypes.string,
};

export default Datafetch;
