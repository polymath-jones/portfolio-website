import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Text from "gsap/dist/TextPlugin";
import useScreenSize from "@/src/hooks/useScreenSize";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Text);

interface Props {}
const HeroText: React.FC<Props> = () => {
  const root = useRef(null);
  const { width } = useScreenSize();
  const isLg = width < 1028;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      let bioContainer = document.querySelector(".root");
      const bioTl = gsap.timeline();

      bioContainer?.addEventListener("mouseenter", () => bioTl.play());
      bioContainer?.addEventListener("mousedown", () => bioTl.reverse());

      const heroTl = gsap
        .timeline()
        .set(".sticker-one", {
          opacity: 0,
          rotate: -30,
        })
        .set(".sticker-two", {
          opacity: 0,
          rotate: 30,
        })
        .set(".carret-one", {
          opacity: 0,
        })
        .set(".carret-two", {
          opacity: 0,
        })
        .to(".carret-one", {
          delay: 6,
          opacity: 1,
          duration: 0.5,
          repeat: -1,
          ease: "steps(1)",
        });

      textData.row_one.forEach((d, i) => {
        heroTl.to(`.${d.class}`, {
          duration: d.duration,
          text: d.text,
          ease: "none",
          delay: d.delay,
          onStart: () => {
            if (i === 0) heroTl.getTweensOf(".carret-one")[1].seek(1).pause();
          },
          onComplete: () => {
            if (i === textData.row_one.length - 1)
              heroTl.getTweensOf(".carret-one")[1].play();
          },
        });
      });

      heroTl
        .to(".sticker-one", {
          delay: 0.4,
          duration: 0.9,
          ease: "bounce.out",
          rotate: -7.5,
          onStart: () => {
            heroTl.getTweensOf(".carret-one")[1].kill();
          },
          onComplete: () => {},
        })
        .to(
          ".sticker-one",
          {
            opacity: 1,
            duration: 0.05,
            ease: "power3.out",
          },
          "<"
        )
        .to(".carret-two", {
          opacity: 1,
          duration: 0.5,
          repeat: -1,
          ease: "steps(1)",
        });

      textData.row_two.forEach((d, i) => {
        heroTl.to(`.${d.class}`, {
          duration: d.duration,
          text: d.text,
          ease: "none",
          delay: d.delay,
          onStart: () => {
            if (i === 0) heroTl.getTweensOf(".carret-two")[1].seek(1).pause();
          },
          onComplete: () => {
            if (i === textData.row_one.length - 1)
              heroTl.getTweensOf(".carret-two")[1].play();
          },
        });
      });

      heroTl
        .to(".sticker-two", {
          delay: 0.5,
          duration: 0.9,
          ease: "bounce.out",
          rotate: 7.5,
          onStart: () => {
            heroTl.getTweensOf(".carret-two")[1].kill();
          },
        })
        .to(
          ".sticker-two",
          {
            opacity: 1,
            duration: 0.05,
            ease: "power3.out",
          },
          "<"
        );

      // heroTl.pause().seek(11);

      const stickerTl = gsap.timeline().to(".sticker", {
        yPercent: isLg ? 0 : -30,
        ease: "power2.out",
        duration: 1,
        stagger: 0.3,
      });

      ScrollTrigger.create({
        animation: stickerTl,
        trigger: ".root",
        // markers: true,
        start: "top top",
        end: "+=300",
        scrub: 1,
      });
    }, root);

    return () => ctx.revert();
  }, [isLg]);

  return (
    <div ref={root} className=" pt-10 xs:pt-0 root">
      <div className=" min-h-[450px] xs:min-h-[550px] lg:min-h-fit max-w-[800px] lg:max-w-full text-[55px] xs:text-[70px] sm:text-[90px] lg:text-[100px] xl:text-9xl text-white mt-10 lg:mt-40 xl:whitespace-nowrap">
        <span className="relative z-10 ">
          {textData.row_one.map((d, i) => (
            <span
              key={i}
              className={`${d.class} ${d.color} z-10 relative tracking-tight bottom-9  xs:bottom-3.75 sm:bottom-0`}
            ></span>
          ))}
          <span className="carret-one text-white relative bottom-9 xs:bottom-3.75 sm:bottom-0">|</span>
          {/* sticker one */}
          <span className="cursor-pointer inline-block relative sticker-container">
            <span className="relative block p-2.5 border border-outline-black rounded-full bg-dark-black-200 right-2 sm:right-10 lg:right-20 bottom-10 opacity-0 sticker-one sticker">
              <span className="flex  items-center rounded-full p-2.5 pl-10 sm:pl-15 border-outline-dark">
                <span className="inline-block leading-[1rem] xs:leading-[1.5rem] sm:leading-[2.5rem] lg:leading-[5rem]">
                  <span>Kayy</span>
                  <span className="flex justify-between items-center pt-5">
                    {/* barcode */}
                    <img className="hidden xs:inline-block h w-20 sm:w-25 lg:w-36" src="/imgs/barcode.png" />
                    <span className="text-[10px] xs:leading-normal sm:text-xs text-gray-dark inline-block pt-1.25">
                      DESIGNER. EST 2015
                    </span>
                  </span>
                </span>
                <figure className="h-[90px] w-[90px] sm:h-[130px] sm:w-[130px] lg:h-[164px] lg:w-[164px] overflow-hidden rounded-full border-outline-dark ">
                  <img src="/imgs/bitmoji_one.png" />
                </figure>
              </span>
            </span>
            {/* bio description */}
            <span className="bio rounded-[40px] block rounded-bl-none absolute h-0 w-0 overflow- bg-dark-black-200 border border-outline-black left-[75%] top-10">
              <p className="bio-text text-base text-gray-normal leading-5 w-full wrap-text p-5 px-6.25"></p>
            </span>
          </span>
        </span>

        <br />
        <span className="inline-block relative bottom-12 xs:bottom-18 xl:bottom-15 min-w-[400px] xs:min-w-[500px] sm:min-w-[700px] lg:min-w-[1200px]">
          {textData.row_two.map((d, i) => (
            <>
              <span
                key={i}
                className={`${d.class} ${d.color} z-10 relative tracking-tight`}
              ></span>
            </>
          ))}

          <span className="carret-two text-white relative opacity-0">|</span>
          {/* sticker two */}
          <span className="inline-block relative">
            <span className="relative block p-2.5 border border-outline-black rounded-full bg-dark-black-200 right-2 sm:right-10 lg:right-20 top-0 xs:-top-5 lg:top-5 opacity-0 sticker-two sticker">
              <span className="flex items-center rounded-full p-2.5 pl-10 sm:pl-15">
                <span className="inline-block leading-[1.5rem] sm:leading-[2rem] lg:leading-[5rem]">
                  <span>Pixels</span>
                  <span className="flex gap-1.25 items-center pt-6.25">
                    {["figma", "rive", "spline", "photoshop"].map((f, i) => (
                      <figure
                        key={i}
                        className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border-outline-dark "
                      >
                        <img src={`/imgs/${f}_logo.png`} alt="" />
                      </figure>
                    ))}
                  </span>
                </span>
                <figure className="h-[90px] w-[90px] sm:h-[130px] sm:w-[130px] lg:h-[164px] lg:w-[164px] overflow-hidden rounded-full border-outline-dark">
                  <img src="/imgs/bitmoji_two.png" />
                </figure>
              </span>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};
const textData = {
  bio: "Hi there, I'm Kayode and I'm a UI designer based in Lagos, Nigeria. I've been designing for 8 years now and I've worked with various companies and clients over the years, building and crafting beautiful products.",
  row_one: [
    {
      text: "Hi there, ",
      color: "text-white",
      class: "span-one",
      delay: 1,
      duration: 0.9,
    },
    {
      text: "I'm",
      color: "text-gray-dark",
      class: "span-two",
      delay: 0.5,
      duration: 0.35,
    },
  ],
  row_two: [
    {
      text: "& ",
      color: "text-gray-dark",
      class: "span-three",
      delay: 1,
      duration: 0.2,
    },
    {
      text: "I'm ",
      color: "text-gray-dark",
      class: "span-four",
      delay: 0.5,
      duration: 0.4,
    },
    {
      text: "in love ",
      color: "text-white",
      class: "span-five",
      delay: 0,
      duration: 0.7,
    },
    {
      text: "with",
      color: "text-gray-dark",
      class: "span-six",
      delay: 0,
      duration: 0.4,
    },
  ],
};
export default HeroText;
