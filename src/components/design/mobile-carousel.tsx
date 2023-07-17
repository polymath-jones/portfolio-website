import useScreenSize from "@/src/hooks/useScreenSize";
import { mobileUrls } from "@/src/utils/interfaces";
import { useState } from "react";
import RoundButton from "../common/round-button";
import PhoneMockup from "./phone-mockup";

const DesignCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useScreenSize();
  const isMobile = width <= 768;
  const translateX = isMobile ? 320 * currentIndex : 385 * currentIndex;

  const scrollLeft = () => {
    if (currentIndex < mobileUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className=" min-w-[5000px] overflow-hidden relative">
      <div
        className="flex relative gap-5"
        style={{
          transform: `translateX(-${translateX}px)`,
          transitionDuration: "1000ms",
          msTransitionTimingFunction: "ease-in-out",
        }}
      >
        {mobileUrls
          .filter((u, i) => i <= 3 + currentIndex)
          .map((u, i) => (
            <div>
              <PhoneMockup
                className={`animate__animated animate__fadeInRight !duration-700 ${""}`}
                style={{ animationDelay: `${700 + 200 * i}ms !important` }}
                url={u}
                key={i}
              />
            </div>
          ))}
      </div>
      <div className="flex gap-[140px] md:block absolute top-[50%] translate-y-[-50%]  md:left-[335px] md:space-y-30 z-50">
        <div
          className={`${
            currentIndex == 0 && "!opacity-30"
          } h-fit animate__animated !backdrop-blur-md rounded-full overflow-hidden animate__fadeInDown !delay-1000 !duration-1000`}
        >
          <RoundButton onclick={() => scrollRight()} />
        </div>
        <div
          style={{ transform: "rotate(180deg)" }}
          className={`${
            currentIndex == mobileUrls.length - 1 && "!opacity-30"
          } h-fit animate__animated !backdrop-blur-md rounded-full overflow-hidden animate__fadeInDown !delay-1000 !duration-1000`}
        >
          <RoundButton isRight onclick={() => scrollLeft()} />
        </div>
      </div>
    </div>
  );
};
export default DesignCarousel;
