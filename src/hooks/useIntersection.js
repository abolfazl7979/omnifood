import React, { useState, useEffect, useRef } from "react";

const useIntersection = (intersectionObj, defaultElementIntersectionStateValue) => {
  const elementRef = useRef();
  const [elementIntersectionState, setElementIntersectionState] = useState(defaultElementIntersectionStateValue);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
            setElementIntersectionState(true);
        } else {
            setElementIntersectionState(false);
        }
      },
      {
        threshold: (intersectionObj) ? intersectionObj.threshold : 0,
        rootMargin: (intersectionObj) ? intersectionObj.rootMargin : 0,
        root: (intersectionObj) ? intersectionObj.root : null,
      }
    );


    intersectionObserver.observe(elementRef.current);
  }, []);

  return {
    elementRef,
    elementIntersectionState,
  };
};

export default useIntersection;
