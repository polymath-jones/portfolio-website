import { useLayoutEffect } from "react";
import gsap from "gsap";

const Loader = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(".loader", {
        width: "100%",
        duration: 6,
        backgroundColor: "#ffffff",
      })
        .to(
          ".loader-wrapper",
          {
            delay: 3,
            duration: 3,
            // borderRadius: 20,
          },
          "<"
        )
        .to(".loader-root", {
          translateY: "100%",
          duration: 1,
          ease: "power2.out",
        });
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="fixed loader-root top-0 left-0 w-screen flex flex-col justify-center items-center h-screen z-30 bg-[#141414]">
    
      <div className="w-[100px] overflow-hidden loader-wrapper h-7.5 bg-gray-darker mx-auto ">
        <div className="w-[0%] loader bg-gray-darker h-full"></div>
      </div>
    </div>
  );
};
export default Loader;
