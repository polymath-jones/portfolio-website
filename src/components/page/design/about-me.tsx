import { useRef, useLayoutEffect, ReactNode } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { getElem } from "@/src/utils/functions";
import React from "react";
import Cover from "./about-sections/cover";
import Bio from "./about-sections/bio";
import Experience from "./about-sections/experience";
import Process from "./about-sections/process";
import Tools from "./about-sections/tools";
import ScrollToProjects from "./scroll-to-projects";

interface Props {}
const AboutMe: React.FC<Props> = ({}) => {
  const root = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap
        .timeline()
        .set(".about-wrapper", {
          perspective: "5000px",
        })
        .set(".skew-wrapper", {
          transformOrigin: "center left",
          transformStyle: "preserve-3d",
        })
        .set(".no-backface", {
          backfaceVisibility: "hidden",
        })
        .set(".rotate-y", {
          rotateY: "-180deg",
        })
        .set(".front-page", {
          borderColor: "#fff0",
          boxShadow: "rgba(0, 0, 0, 0) 10px 0px 30px",
        });

      aboutData.forEach((_, i) => {
        if (i < aboutData.length - 1)
          tl.to(".skew-wrapper-" + i, {
            duration: 5,
            rotateY: "-120deg",
          })
            .to(
              ".front-page-" + i,
              {
                borderColor: "#fff1",
                boxShadow: "rgba(0, 0, 0, 0.1) 10px 0px 30px",
                duration: 3,
              },
              "<"
            )
            .to(
              ".front-page-inner-" + i,
              {
                opacity: 0,
                duration: 3,
              },
              "<"
            )
            .to(
              ".no-backface-" + i,
              {
                opacity: 0,
                duration: 3,
              },
              "<+=3"
            )
            .to(
              ".binder-" + i,
              {
                opacity: 0,
                duration: 3,
              },
              "<"
            );
      });

      tl.to(".no-backface-0", {
        opacity: 1,
        duration: 2,
      })
        .to(
          ".binder-0",
          {
            opacity: 1,
            duration: 2,
          },
          "<"
        )
        .to(
          ".skew-wrapper-0",
          {
            duration: 5,
            rotateY: "0deg",
          },
          "<"
        )
        .to(
          ".front-page-0",
          {
            borderColor: "#fff1",
            boxShadow: "rgba(0, 0, 0, 0) 10px 0px 30px",
          },
          "<"
        )
        .to(
          ".front-page-inner-0",
          {
            opacity: 1,
            duration: 2,
          },
          "<"
        );

      ScrollTrigger.create({
        animation: tl,
        trigger: ".about-wrapper",
        // markers: true,
        pin: true,
        scrub: true,
        snap: (value) => {
          return value;
        },
        onUpdate: (self) => {},
        start: "top top",
        end: () => `+=5000`,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="mt-0 sm:mt-20" ref={root}>
      <div className="about-wrapper pt-10 min-h-[800px] h-[100vh] relative">
        {aboutData.map((c, i) => (
          <article
            key={i}
            className={`skew-wrapper-${i} skew-wrapper absolute w-full h-[90%] `}
            style={{ zIndex: -i }}
          >
            <div
              className={`no-backface-${i} no-backface top-0 left-0 w-full h-full absolute bg-gray-darker rounded-[40px] rotate-y`}
            ></div>
            <div
              className={`no-backface-${i} no-backface top-0 left-0 w-full h-full absolute pl-[30px] pr-[30px] xs:pl-[60px] sm:pl-[100px] sm:pr-[80px] 2md:pl-[120px] 2md:pr-[100px]  lg:pl-[200px] lg:pr-[120px] pt-[100px]  bg-dark-black-200 border border-[#0000] front-page front-page-${i} rounded-[25px] lg:rounded-[40px]`}
            >
              <div className={`front-page-inner-${i}`}>{c()} </div>
            </div>
            <div
              className={`binder-${i} absolute top-[50%] translate-y-[-50%] left-1.25 2md:left-10`}
            >
              {new Array(10).fill("").map(() => (
                <div className="sm:block hidden w-10 h-10 2md:w-12.5 2md:h-12.5 rounded-full  bg-dark-black border-outline-black border mb-5 relative last:mb-0">
                  <div className="absolute w-[50px] h-6.25 2md:w-[90px] 2md:h-7.5 rounded-full bg-dark-black-200 border border-outline-black right-1.5 top-2.5 2md:right-2.5 2md:top-3.5 origin-right rotate-[15deg]"></div>
                </div>
              ))}
            </div>
          </article>
        ))}
        <div className="absolute right-10 bottom-20 lg:bottom-30 lg:right-20">
              <ScrollToProjects/>
            </div>
        <div className="absolute top-[50%] translate-y-[-50%] left-10"></div>
      </div>
      ;
    </section>
  );
};
export default AboutMe;
const aboutData = [Cover, Bio, Experience, Process, Tools];
