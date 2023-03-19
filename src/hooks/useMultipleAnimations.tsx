import { useEffect } from "react";

const useMultipleAnimations = (inView: boolean, animation: any) => {
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        transition: {
          type: "easeInOut",
          duration: 1,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: "35vh",
      });
    }
  }, [inView, animation]);
};

export default useMultipleAnimations;
