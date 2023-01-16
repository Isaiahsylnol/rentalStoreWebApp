import React, { useEffect, useState } from "react";
import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="inline-flex justify-center" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 6000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  }

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="transition duration-300 ease-in-out whitespace-nowrap"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="indicators mt-4">
        {/* Carousel indexs */}
        {React.Children.map(children, (child, index) => {
          return (
            <button
              onClick={() => {
                updateIndex(index);
              }}
              className={`rounded-2xl h-3 w-3 ${
                index === activeIndex
                  ? "bg-cyan-300"
                  : "bg-gray-500 hover:bg-cyan-300"
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
