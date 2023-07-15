import { desktopUrls, mobileUrls } from "@/src/utils/interfaces";
import { useState } from "react";
import RoundButton from "../common/round-button";

interface Props {
  isOpen: boolean;
  setGalleryIsOpen: (value: boolean) => void;
}
const Gallery: React.FC<Props> = ({ isOpen, setGalleryIsOpen }) => {
  const [screenSize, setScreenSize] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = screenSize === 1;

  const urls = isMobile ? mobileUrls : desktopUrls;

  const scrollLeft = () => {
    if (currentImageIndex < urls.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const scrollRight = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="w-[100vw] h-[100vh] top-0 fixed cursor-pointer bg-[#000000bb] backdrop-blur-3xl z-[999999999] pt-0">
      <div className="max-w-[1500px] h-full m-auto py-[50px] px-2.5 md:px-[40px] flex flex-col gap-5">
        {/* NAV */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2.5 md:gap-5 items-center justify-center">
            {["DESKTOP DESIGNS", "MOBILE DESINGS"].map((s, i) => (
              <span
                className={`${
                  i == screenSize &&
                  "px-5 py-3.75 !opacity-100 bg-[#ffffff0e] rounded-full"
                } text-white opacity-40 font-body tracking-tight text-xs md:text-sm cursor-pointer select-none`}
                onClick={() => {
                  setScreenSize(i);
                  setCurrentImageIndex(0);
                }}
                key={i}
              >
                {s}
              </span>
            ))}
          </div>
          <button
            onClick={() => {
              setGalleryIsOpen(false);
            }}
          >
            {/* prettier-ignore */}
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.16455 29.8519L29.9364 1.08003" stroke="white" stroke-width="2"/>
              <path d="M1.16455 1.08002L29.9364 29.8518" stroke="white" stroke-width="2"/>
              </svg>
          </button>
        </div>

        <div className="m-auto w-full  rounded-[20px]  md:flex-1 relative">
          <div className=" overflow-hidden rounded-[5px] w-full  h-[650px] ">
            <div className="">
              {urls.map((u, i) => (
                <img
                  src={u}
                  className={`animate__animated absolute ${
                    i == currentImageIndex
                      ? "animate__fadeInUp"
                      : "animate__fadeOutDown"
                  } !duration-1000 m-auto ${
                    isMobile ? "h-full" : "w-full"
                  } object-cover left-0 right-0 `}
                />
              ))}
            </div>
          </div>
          <div className="flex md:justify-between w-fit gap-30  md:gap-[140px] absolute  m-auto left-0 right-0 top-[50%] translate-y-[-50%] z-50">
            <div
              className={`${
                currentImageIndex == 0 && "!opacity-30"
              } h-fit animate__animated !backdrop-blur-md rounded-full overflow-hidden animate__fadeInDown !delay-1000 !duration-1000`}
            >
              <RoundButton onclick={() => scrollRight()} />
            </div>
            <div className="!rotate-180 !backdrop-blur-md rounded-full overflow-hidden animate__animated animate__fadeInUp !delay-1000 !duration-1000">
              <RoundButton onclick={() => scrollLeft()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
