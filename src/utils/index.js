import React from "react";

export const addVector3 = (vector1, vector2) => vector1.map((val, index) => val + vector2[index])

export const useResponsiveScreen = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
  
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };
  
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowSizeChange);
  
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }, []);
  
    const isMobile = width <= 768;
  
    return { isMobile };
  };