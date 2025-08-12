import { useEffect, useState } from "react";

const FadeComponent = () => {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    // Trigger slide-in after component mounts
    setSlideIn(true);
  }, []);

  return (
    <div
      style={{
        transform: slideIn ? "translateX(0)" : "translateX(-100%)",
        transition: "transform 0.5s ease-out",
        width: "300px",
        height: "150px",
        backgroundColor: "skyblue",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "50px auto",
        fontSize: "1.5rem",
      }}
    >
      I slide in on reload!
    </div>
  );
};

export default FadeComponent;
