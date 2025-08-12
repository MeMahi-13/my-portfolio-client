import { useEffect, useState } from "react";

const Banner = () => {
      const [slideIn, setSlideIn] = useState(false);
    
      useEffect(() => {
        // Trigger slide-in after component mounts
        setSlideIn(true);
      }, []);
  return (
    <div id="home" className="bg-[#DBE6F5]  max-w-screen max-h-screen">
      {/* Grid Layout */}
      <div className="grid grid-cols-3 items-center px-4">
        <img
         style={{
        transform: slideIn ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 1.5s ease-out",
      }}
          src="https://i.ibb.co/xKFNhgBD/Cloud.png"
          alt="Cloud Left"
          className="justify-self-end"
        />
        <div
          style={{
        transform: slideIn ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 1.5s ease-out",}}
         className="text-center text-[#354E73] text-2xl font-semibold ">
          Hi I'm<br />
          <span className="font-bold tangerine-regular text-7xl">
            Mohima Chowdhury
          </span>
          <br />
          <span className="main-subtitle">a frontend developer</span>
        </div>
        <img
          style={{
        transform: slideIn ? "translateX(0)" : "translateX(100%)",
        transition: "transform 1.5s ease-out",
      }}
          src="https://i.ibb.co/xKFNhgBD/Cloud.png"
          alt="Cloud Right"
          className="justify-self-start"
        />
      </div>

      {/* Centered Mountain Image */}
      <div className="flex flex-row justify-center h-80 ">
        <img
          src="https://i.ibb.co/VW3dwq69/Mountain.png"
          alt="Mountain"
          className=""
        />
      </div>
    </div>
  );
};

export default Banner;
