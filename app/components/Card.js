import React, { useState } from "react";

function Card({ cityName, temperature, weather, humidity, windSpeed, pressure }) {
    const [isFahrenheit, setIsFahrenheit] = useState(true);

    // Function for F to C conversion
    const convertTemp = (temp) => {
        return isFahrenheit ? temp : ((temp - 32) * 5 / 9).toFixed(1);
    };

    return (
        <div className="inline-block">
            <div className="w-[300px] bg-blue-600 rounded-lg shadow-lg p-4 text-white transform hover:scale-105 transition-transform duration-300 m-2">
                {/* City Name and Temperature in row */}
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-bold">{cityName.toUpperCase()}</h2>
                    <div className="text-right">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold">
                                {convertTemp(temperature)}°{isFahrenheit ? 'F' : 'C'}
                            </span>
                            <button
                                onClick={() => setIsFahrenheit(!isFahrenheit)}
                                className="px-2 py-1 text-xs bg-white/20 rounded hover:bg-white/30 transition-colors"
                            >
                                {isFahrenheit ? '°C' : '°F'}
                            </button>
                        </div>
                        <p className="text-sm capitalize">{weather}</p>
                    </div>
                </div>

                {/* Weather Details in compact grid */}
                <div className="grid grid-cols-3 gap-2">
                    <div className="flex items-center space-x-1 bg-white/10 rounded-md p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                            />
                        </svg>
                        <div>
                            <p className="text-xs opacity-75">Wind</p>
                            <p className="text-sm font-semibold">{windSpeed}km/h</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-1 bg-white/10 rounded-md p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                        </svg>
                        <div>
                            <p className="text-xs opacity-75">Humid</p>
                            <p className="text-sm font-semibold">{humidity}%</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-1 bg-white/10 rounded-md p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                        </svg>
                        <div>
                            <p className="text-xs opacity-75">Press</p>
                            <p className="text-sm font-semibold">{pressure}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
