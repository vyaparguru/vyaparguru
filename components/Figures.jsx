"use client"
import { useEffect, useState } from "react";

export const Figures = () => {
  // State for storing the target numbers
  const targets = [200, 100, 25, 50];
  
  // State for the current numbers being displayed
  const [count, setCount] = useState([0, 0, 0, 0]);

  // Countdown logic
  useEffect(() => {
    const intervalIds = targets.map((target, index) => {
      return setInterval(() => {
        setCount((prevCount) => {
          const newCount = [...prevCount];
          if (newCount[index] < target) {
            newCount[index] += Math.ceil(target / 100); // Increment in smaller steps
          } else {
            clearInterval(intervalIds[index]); // Stop interval once target is reached
          }
          return newCount;
        });
      }, 20); // Adjust the speed of the animation here
    });

    return () => intervalIds.forEach((id) => clearInterval(id)); // Cleanup intervals on unmount
  }, []);

  return (
    <div className="bg-white grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-5 text-black md:px-20">
      <div className="transform transition-transform duration-300">
        <h3 className="text-4xl md:text-5xl font-bold">{count[0]}+</h3>
        <p className="text-black font-bold">Websites Developed</p>
      </div>
      <div className="transform transition-transform duration-300">
        <h3 className="text-4xl md:text-5xl font-bold">{count[1]}+</h3>
        <p className="text-black font-bold">Happy Clients</p>
      </div>
      <div className="transform transition-transform duration-300">
        <h3 className="text-4xl md:text-5xl font-bold">{count[2]}+</h3>
        <p className="text-black font-bold">Client Reviews</p>
      </div>
      <div className="transform transition-transform duration-300">
        <h3 className="text-4xl md:text-5xl font-bold">{count[3]}+</h3>
        <p className="text-black font-bold">Repeat Clients</p>
      </div>
    </div>
  );
};
