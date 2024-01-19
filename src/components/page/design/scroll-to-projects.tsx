import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const ScrollToProjects = ({}) => {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.set(".arrow", {
        opacity: 0,
        yPercent: -25,
      })
        .set(".root-wrapper", {
          opacity: 0,
        })
        .set(".arrow-wrapper", {
          backgroundColor: "#141414",
        })
        .to(".root-wrapper", {
          delay: 0,
          opacity: 1,
        })
        .to(".arrow", {
          opacity: 1,
        })
        .to(
          ".arrow",
          {
            yPercent: 25,
            repeat: -1,
            yoyo: true,
            ease: "none",
            yoyoEase: "none",
          },
          "<"
        )
        .to(".arrow", {
          delay: 0.3,
          color: "white",
          duration: 0.5,
        })
        .to(
          ".arrow-wrapper",
          {
            backgroundColor: "#141414",
            duration: 0.5,
          },
          "<"
        )
        .to(
          ".texts",
          {
            padding: "0px 20px 0px 10px",
          },
          "<"
        )
        .to(
          ".span-one",
          {
            delay: 0.4,
            duration: 0.4,
            text: "See my  ",
            ease: "none",
          },
          "<"
        )
        .to(".span-two", {
          duration: 0.3,
          text: "Projects",
          ease: "none",
        })
        .to(".span-two", {
          delay: 4,
          duration: 0.3,
          text: "",
          ease: "none",
        })
        .to(
          ".span-one",
          {
            duration: 0.4,
            text: "",
            ease: "none",
          },
        )
        .to(
          ".texts",
          {
            padding: "0px 0px",
            duration: 0,
          },

        );

      ScrollTrigger.create({
        animation: tl,
        trigger: ".root-wrapper",
        // markers: true,
        start: "bottom bottom",
        end: "+=7",
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={root}
      className="cursor-pointer select-none"
      onClick={() => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <div className="p-2.5 border border-outline-black w-fit rounded-full root-wrapper flex items-center">
        <div className="rounded-full bg-white w-20 h-20 md:h-25 md:w-25 flex flex-col items-center justify-center arrow-wrapper">
          {/* prettier-ignore */}
          <svg className="text-white arrow" width="36" height="36" viewBox="0 0 36 38" fill="none" >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 29.8508V0.930176H20V29.8508L32.7035 17.1473L35.5319 19.9757L18 37.5077L0.468048 19.9757L3.29648 17.1473L16 29.8508Z" fill="currentColor"/>
        </svg>
        </div>
        <span className="leading-tight text-white text-2xl md:text-[32px] texts">
          <p className="span-one text-gray-dark block "></p>
          <p className="min-h-[1em] span-two block relative"></p>
        </span>
      </div>
    </div>
  );
};
export default ScrollToProjects;
