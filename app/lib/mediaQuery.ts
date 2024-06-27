import { useState, useCallback, useEffect } from "react";
const useMediaQuery = (width = 800) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(`(max-width:${width ?? 800}px)`);
      media.addEventListener("change", updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeEventListener("change", updateTarget);
    }
  }, []);

  return targetReached;
};

export default useMediaQuery;
