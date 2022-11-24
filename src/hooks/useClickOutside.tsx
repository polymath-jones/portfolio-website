import { MutableRefObject, useEffect } from "react";

const useClickOutside = (ref: MutableRefObject<any>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
};

export default useClickOutside;
