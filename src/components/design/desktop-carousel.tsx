import useScreenSize from "@/src/hooks/useScreenSize";
import { desktopUrls } from "@/src/utils/interfaces";
import { useState } from "react";
import RoundButton from "../common/round-button";
import PhoneMockup from "./phone-mockup";

const DesktopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width } = useScreenSize();
  const isMobile = width <= 768;
  const translateX = isMobile ? 320 * currentIndex : 385 * currentIndex;

  const scrollLeft = () => {
    if (currentIndex < desktopUrls.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className="max-w-[900px] relative h-fit scale-125 translate-y-[50px]">
      <img src="/imgs/svgs/laptop-frame.svg" alt="" />
      <div className="bg-black overflow-hidden rounded-[5px] h-[82%] w-[78%] m-auto absolute left-0 right-0 z-20 top-2.5 ">
        {desktopUrls.map((u, i) => (
          <div
            className={`w-full h-full bg-cover absolute animate__animated ${
              i == currentIndex ? "animate__fadeInUp" : "animate__fadeOutDown"
            } !duration-1000`}
            style={{ backgroundImage: `url(${u})` }}
          ></div>
        ))}
      </div>
      <div className="flex md:justify-between w-fit -bottom-10 md:bottom-2.5 gap-30  md:gap-[140px] absolute  m-auto left-0 right-0 z-50">
        <div
          className={`${
            currentIndex == 0 && "!opacity-50"
          }  h-fit animate__animated !backdrop-blur-md rounded-full overflow-hidden animate__fadeInDown !delay-1000 !duration-1000`}
        >
          <RoundButton onclick={() => scrollRight()} />
        </div>
        <div className="!rotate-180 !backdrop-blur-md rounded-full overflow-hidden animate__animated animate__fadeInUp !delay-1000 !duration-1000">
          <RoundButton onclick={() => scrollLeft()} />
        </div>
      </div>
    </div>
  );
};
export default DesktopCarousel;
