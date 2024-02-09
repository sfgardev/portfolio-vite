import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeCahnge = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeCahnge);
    return () => window.removeEventListener("resize", handleWindowSizeCahnge);
  }, []);

  return width;
};
