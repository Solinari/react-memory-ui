import { useState, useEffect } from "react";

const getHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

function useCurrentHeightHook() {
  let [height, setCurrentHeight] = useState(getHeight());

  useEffect(() => {
    let timeout = null;

    const listener = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => setCurrentHeight(getHeight()), 150);
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return height;
}

export default useCurrentHeightHook;
