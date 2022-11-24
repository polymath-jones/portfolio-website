import { useEffect, useState } from "react";

export enum BreakPoint {
  "xs",
  "sm",
  "m",
  "l",
  "xl",
}

const useScreenSize = () => {
  const getSize = function () {
    const width = window?.innerWidth;

    return {
      width: width,
      height: window?.innerHeight,
      screen: BreakPoint.sm,
      isSmall: width < 520,
    };
  };

  var [screenSize, setScreenSize] = useState({
    width: 300,
    height: 300,
    screen: BreakPoint.sm,
    isSmall: true,
  });

  useEffect(() => {
    setScreenSize(getSize());

    function handleResize() {
      setScreenSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (screenSize.width < 520) {
    screenSize.screen = BreakPoint.xs;
  } else if (screenSize.width >= 520 && screenSize.width < 800) {
    screenSize.screen = BreakPoint.sm;
  } else if (screenSize.width >= 800 && screenSize.width < 1024) {
    screenSize.screen = BreakPoint.m;
  } else if (screenSize.width >= 1024 && screenSize.width < 1280) {
    screenSize.screen = BreakPoint.l;
  } else {
    screenSize.screen = BreakPoint.xl;
  }

  return screenSize;
};

export default useScreenSize;
