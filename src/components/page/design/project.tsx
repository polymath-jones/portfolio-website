import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { getElem } from "@/src/utils/functions";
import useScreenSize from "@/src/hooks/useScreenSize";
import classNames from "classnames";

interface Props {
  data: {
    tags: string[];
    images: string[];
    link: {
      color: "orange" | "green";
      url: string;
      label: string;
    };
    casestudy: string;
    logo: string;
    client: string;
    description: string;
    isMobile: boolean;
  };
  index: number;
}
const Project: React.FC<Props> = ({ data, index }) => {
  const { tags, link, client, description, isMobile, logo, images, casestudy } =
    data;
  const root = useRef(null);
  const { width, height } = useScreenSize();
  const isMd = width <= 1024;
  const [imagesLoaded, setImagesLoaded] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap
        .timeline()
        .set(".progress", {
          strokeDasharray: "200",
          strokeDashoffset: "200",
        })
        .set(".mobile-skew", {
          skewX: "35deg",
          skewY: "-15deg",
          height: isMd ? "80%" : "120%",
        })
        .set(".desktop-skew", {
          skewX: "40deg",
          skewY: "-15deg",
        })
        .set(".duplicate", {
          bottom: "50%",
        })
        .set(".span-two", {
          opacity: 0,
        })
        .to(
          ".client",
          {
            height: 0,
            opacity: 0,
            duration: 20,
          },
          "<"
        )
        .to(".app-shadow", { opacity: 0, duration: 20 }, "<")
        .to(
          ".span-one",
          {
            opacity: 0,
            duration: 5,
          },
          "<"
        )
        .to(
          ".span-two",
          {
            opacity: 1,
            duration: 20,
          },
          "<"
        )
        .to(
          ".mobile-skew",
          {
            skewX: "0deg",
            skewY: "0deg",
            right: "0px",
            top: "0px",
            duration: 20,
            height: "100%",
          },
          "<"
        )
        .to(
          ".desktop-skew",
          {
            skewX: "0deg",
            skewY: "0deg",
            duration: 20,
            width: "100%",
            right: "0px",
            top: "0px",
            height: isMd ? "60%" : "100%",
          },
          "<"
        )
        .to(
          ".desktop-cover",
          {
            height: "100%",
            duration: 20,
          },
          "<"
        )
        .to(
          ".mobile-img",
          {
            xPercent: "100",
            duration: 20,
            marginRight: 0,
          },
          "<"
        )
        .to(
          ".duplicate",
          {
            bottom: "120%",
            duration: 20,
            marginLeft: 0,
          },
          "<"
        )
        .to(".projects-wrapper", {
          transform: `translateX(calc(-100% + ${
            getElem(".projects")?.offsetWidth ?? 0
          }px))`,
          ease: "none",
          duration: 50,
        })
        .to(
          ".progress",
          {
            strokeDasharray: "200",
            strokeDashoffset: "0",
            duration: 50,
            ease: "none",
          },
          "<"
        );

      ScrollTrigger.create({
        animation: tl,
        trigger: ".wrapper",
        // markers: true,
        pin: true,
        scrub: true,
        snap: (value) => {
          return value;
        },
        onUpdate: (self) => {},
        start: "top top",
        end: () => `+=${getElem(".projects-wrapper")?.offsetWidth + 2000}`,
      });
    }, root);

    return () => ctx.revert();
  }, [width, imagesLoaded]);

  return (
    <section ref={root} className="mt-[30px] md:mt-[150px]">
      <div className="wrapper h-screen flex flex-col pb-5">
        <header className="md:flex items-center justify-between flex-shrink flex-grow-0 pt-10 mb-[50px]">
          <div className="w-20 h-10 relative">
            <span className="span-two sm:text-base text-sm left-0 top-0 absolute text-white font-semibold tracking-tighter uppercase">
              {client}
            </span>
          </div>

          <div className="flex items-center gap-1.25">
            {tags.map((t, i) => (
              <div
                key={i}
                className="uppercase tracking-wider flex items-center h-[33px] text-gray-normal hover:border-gray-dark text-xs sm:text-sm border border-outline-black rounded-full gap-2.5 p-2.5 "
              >
                <span> {t} </span>
              </div>
            ))}

            <button className="flex items-center h-[33px] text-gray-normal hover:border-gray-dark text-xs md:text-sm border border-outline-black rounded-full gap-2.5 p-2.5 font-body">
              <div
                className={`w-2.5  h-2.5 rounded-full ${
                  link.color === "green" ? "bg-green-400" : "bg-orange-400"
                }`}
              ></div>
              <a className="uppercase" href={link.url} target="_blank">
                {link.label}
              </a>
              {link.url && (
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.09213 0.0722663L0.128195 0.0722656V2.06425L6.68759 2.06425L0.241101 8.51074L1.64965 9.91929L8.09614 3.4728V10.0322H10.0881L10.0881 1.06826L9.09213 0.0722663Z"
                    fill="white"
                  />
                </svg>
              )}
            </button>

            <a
              target="_blank"
              href={casestudy}
              className="flex items-center h-[33px] text-dark-black bg-white  hover:border-gray-dark text-xs sm:text-sm border border-outline-black rounded-full gap-2.5 p-2.5 font-body"
            >
              <span className="uppercase">CASE STUDY</span>
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.09213 0.0722663L0.128195 0.0722656V2.06425L6.68759 2.06425L0.241101 8.51074L1.64965 9.91929L8.09614 3.4728V10.0322H10.0881L10.0881 1.06826L9.09213 0.0722663Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </header>
        <section className="client overflow-hidden h-fit flex-shrink flex-grow-0">
          <div className="flex items-center gap-2.5 md:gap-5">
            <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] border border-outline-black rounded-full flex justify-center items-center">
              <img className="h-[60%]" src={logo} alt="" />
            </div>
            <span className="text-white text-[40px] md:text-[64px]">
              {client}{" "}
            </span>
          </div>
          <p className=" text-sm md:text-base lg:text-lg font-medium max-w-2xl text-gray-dark !tracking-wider mt-5 md:mt-7.5 pb-12.5">
            {description}
          </p>
        </section>
        <div
          className={`${
            isMobile ? "pt-0" : "pt-10 lg:pt-0"
          } overflow-hidden  bg-dark-black-200 rounded-[25px] md:rounded-[40px] projects w-full flex-1 relative`}
        >
          <div className="projects-wrapper w-max gap-5 flex h-full">
            <div className="h-full w-[90vw] min-w-max sm:min-w-min xs:w-screen  max-w-[1360px] relative flex-shrink-0">
              {isMobile ? (
                <div className="mobile-skew flex h-full justify-end relative  top-0 right-0 xs:right-[5%] xs:top-[50%]">
                  <img
                    className="app-shadow opacity-30 right-0 translate-x-[-160%] translate-y-[20%] z-10 absolute  h-full flex-shrink-0 mobile-img mr-5"
                    src={images[0]}
                  />
                  <img
                    className="z-10 relative h-full flex-shrink-0 mobile-img mr-5"
                    src={images[0]}
                  />
                  <img
                    className="flex-shrink-0 h-full relative duplicate"
                    src={images[1]}
                  />
                </div>
              ) : (
                <div className="desktop-skew -right-[30%] xs:right-0 h-full flex relative justify-end bottom-[-30%]">
                  <img
                    className="app-shadow right-[100px] top-20  lg:right-[150px] lg:top-30  opacity-30 md:min-h-[400px] sm:h-[60%] h-[50%] max-w-none flex-shrink-0 absolute"
                    src={images[0]}
                  />
                  <img
                    className="desktop-cover md:min-h-[400px] sm:h-[60%] h-[50%] max-w-none flex-shrink-0 relative"
                    src={images[0]}
                  />
                </div>
              )}
            </div>

            {images.map(
              (img, i) =>
                i !== 0 && (
                  <div key={i} className="w-fit flex-shrink-0 h-full">
                    <img
                      onLoad={() =>
                        i === images.length - 1&&
                        setImagesLoaded(imagesLoaded + 1)
                      }
                      className={`${
                        !isMobile ? "max-w-max h-[60%] lg:h-full " : "h-full"
                      }`}
                      src={img}
                    />
                  </div>
                )
            )}
          </div>

          <div className="absolute bottom-10 left-10 p-2.5 rounded-full backdrop-blur-md bg-[#00000022]">
            {/* prettier-ignore */}
            <svg className="progress" width="61" height="60" viewBox="0 0 61 60" fill="none" >
            <path d="M30.7001 1.90002C34.4096 1.90002 38.0827 2.63065 41.5098 4.0502C44.9369 5.46974 48.0508 7.5504 50.6738 10.1734C53.2968 12.7964 55.3774 15.9103 56.797 19.3374C58.2165 22.7645 58.9471 26.4376 58.9471 30.147C58.9471 33.8565 58.2165 37.5296 56.797 40.9567C55.3774 44.3838 53.2968 47.4977 50.6738 50.1207C48.0508 52.7437 44.9369 54.8243 41.5098 56.2439C38.0827 57.6634 34.4096 58.394 30.7001 58.394C26.9907 58.394 23.3176 57.6634 19.8905 56.2439C16.4634 54.8243 13.3495 52.7437 10.7265 50.1207C8.1035 47.4977 6.02284 44.3838 4.6033 40.9567C3.18375 37.5296 2.45312 33.8565 2.45312 30.147C2.45312 26.4376 3.18375 22.7645 4.6033 19.3374C6.02285 15.9103 8.10351 12.7964 10.7265 10.1734C13.3495 7.5504 16.4634 5.46974 19.8905 4.0502C23.3176 2.63065 26.9907 1.90002 30.7001 1.90002L30.7001 1.90002Z" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
