import { useState, useEffect } from "react";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useCurrentWidthHook() {
  let [width, setCurrentWidth] = useState(getWidth());

  useEffect(() => {
    let timeout = null;

    const listener = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => setCurrentWidth(getWidth()), 150);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return width;
}

export default useCurrentWidthHook;
