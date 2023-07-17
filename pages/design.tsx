import Head from "next/head";
import "animate.css";
import Logo from "@/src/components/common/logo";
import DesignCarousel from "@/src/components/design/mobile-carousel";
import DesktopCarousel from "@/src/components/design/desktop-carousel";
import { LinkButton } from "@/src/components/common/Link-button";
import { useEffect, useRef, useState } from "react";
import Gallery from "@/src/components/design/gallery";

export default function Design() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean | undefined>(undefined);
  const [galleryIsOpen, setGalleryIsOpen] = useState(false);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    // Scrollbar.initAll();
  }, []);

  const scrollTo = (ref: any) => {
    if (ref && ref.current) {
      setMenuIsOpen(false);
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openGallery = () => {
    setGalleryIsOpen(true);
    setMenuIsOpen(false);
  };

  return (
    <>
      <Gallery setGalleryIsOpen={setGalleryIsOpen} isOpen={galleryIsOpen} />
      {/* MENU */}
      <div
        className={`w-full ${
          menuIsOpen == undefined && "!h-0 overflow-hidden"
        }  animate__animated backdrop-blur-xl bg-[#ffffffd7] h-[530px] fixed top-0 left-0 z-[999] ${
          menuIsOpen ? "animate__fadeInDown" : "animate__fadeOutUp"
        }`}
      >
        <div className="max-w-[1500px] h-full m-auto pt-7.5 md:pt-[50px] px-5 md:px-[40px]">
          <div className="flex justify-end">
            <button
              onClick={() => {
                setMenuIsOpen(!menuIsOpen);
              }}
            >
              {/* prettier-ignore */}
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.16455 29.8519L29.9364 1.08003" stroke="black" stroke-width="2"/>
              <path d="M1.16455 1.08002L29.9364 29.8518" stroke="black" stroke-width="2"/>
              </svg>
            </button>
          </div>
          {/* LINKS */}
          <div className="space-y-2.5 md:space-y-7.5 mt-5">
            <h1
              className="text-4xl cursor-pointer  md:text-5xl tracking-tighter "
              onClick={() => scrollTo(aboutRef)}
            >
              ABOUT
            </h1>
            <h1
              className="text-4xl cursor-pointer  md:text-5xl tracking-tighter "
              onClick={() => scrollTo(contactRef)}
            >
              CONTACT
            </h1>
            <button
              className="text-black flex gap-5 items-center h-fit  "
              onClick={() => openGallery()}
            >
              <span className="text-4xl shrink-0 text-left  md:text-5xl tracking-tight leading-[1] ">
                VIEW
                <br />
                GALLERY
              </span>
              {/* prettier-ignore */}
              <svg className="relative animate__animated animate__fadeInLeft !delay-500 !duration-700" xmlns="http://www.w3.org/2000/svg" width="135" height="12" viewBox="0 0 135 12" fill="none">
                  <path d="M134.173 6.01614L124.173 0.242641V11.7896L134.173 6.01614ZM0.17334 7.01614H125.173V5.01614H0.17334V7.01614Z" fill="black"/>
                </svg>
            </button>
          </div>
        </div>
      </div>
      <div data-scrollbar className="h-[100vh]">
        <Head>
          <title>Portfolio</title>
        </Head>
        <div className="w-full h-fit bg-gray-100 pb-20 relative">
          {/* MAIN */}
          <div className="max-w-[1500px] h-full m-auto pt-7.5 md:pt-[50px] px-5 md:px-[40px]">
            <div className="flex justify-between items-center">
              <Logo />

              <div
                onClick={() => setMenuIsOpen(!menuIsOpen)}
                className="w-15 cursor-pointer flex flex-col gap-1.5 py-2.5"
              >
                <div className="h-0.5 bg-black animate__animated animate__fadeInDown !delay-500 !duration-500"></div>
                <div className="h-0.5 bg-black animate__animated animate__fadeInDown !delay-700 !duration-500"></div>
              </div>
            </div>
            {/* MOBILE DESIGNS */}
            <div className="md:grid grid-cols-2 mt-12.5">
              {/* LEFT */}
              <div className="rounded-[20px] bg-black h-[530px] md:h-[750px] overflow-hidden relative">
                <div className="flex gap-[90px] flex-col md:flex-row justify-between p-5 md:p-10">
                  <div>
                    <h1 className="text-white !font-display tracking-tight leading-[1.0] text-4xl md:text-[44px] font-bold">
                      <div className="animate__animated animate__fadeInUp !delay-500 !duration-700">
                        <span className="opacity-50 font-display">Hi I’m</span>{" "}
                        Kayode
                      </div>
                      <div className="animate__animated animate__fadeInUp !delay-700 !duration-700">
                        <span className="opacity-50 font-display"> & </span> I
                        design
                      </div>
                      <div className="animate__animated animate__fadeInUp !delay-1000 !duration-700">
                        User Interfaces
                      </div>
                    </h1>
                    <div className="md:mt-0 mt-5 animate__animated animate__fadeInUp !delay-1000 !duration-700">
                      <p className="opacity-30 font-body text-white max-w-[290px] text-justify tracking-tight !leading-tight text-sm md:text-base md:mt-12.5">
                        I'm a designer with 3 years of experience. I've worked
                        with various companies and clients over the years,
                        building and crafting beautiful products.
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#000000c9] backdrop-blur-md z-50 -mx-5 md:mx-0 p-5 py-7.5 md:p-0  w-fit flex items-baseline md:block animate__animated animate__fadeInLeft !delay-1000 !duration-700">
                    <p className="text-white font-body opacity-50 font-bold tracking-tight md:mb-2.5 text-sm">
                      MOBILE <br /> DESIGNS
                    </p>
                    {/* prettier-ignore */}
                    <svg className="rotate-90 md:rotate-0 md:left-0 relative top-1 md:h-fit w-10 md:w-[initial] block" width="63" height="7" viewBox="0 0 63 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M62.7832 3.72364L57.7832 0.836886L57.7832 6.61039L62.7832 3.72364ZM0.783203 4.22363L58.2832 4.22364L58.2832 3.22364L0.783203 3.22363L0.783203 4.22363Z" fill="white"/>
                </svg>
                  </div>
                </div>

                <div className="absolute -bottom-10 md:-bottom-12.5 left-0 w-full animate__animated animate__fadeInUp !delay-700 !duration-1000">
                  <img
                    src="https://res.cloudinary.com/swapng/image/upload/v1689598224/skills-illustration_rihdfr.png"
                    className="relative block max-w-[110%] translate-x-[-50%] left-[50%]"
                    alt=""
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div className="py-1 md:px-5 flex gap-5 h-full mt-5 md:mt-0 overflow-hidden ">
                <DesignCarousel />
              </div>
            </div>

            {/* DESKTOP DESIGNS */}
            <div
              className="md:pb-40 rounded-[20px] bg-white mt-5 py-15 md:py-20 overflow-hidden -mx-5 sm:mx-0"
              style={{ backgroundImage: "url('/imgs/svgs/pattern.svg')" }}
            >
              <div className="flex justify-between px-7.5 md:px-12.5">
                <p className="font-display max-w-[250px] text-3xl mb-2 md:mb-12.5 tracking-tighter leading-[1]">
                  High fidelity desktop designs crafted with care and attention
                  to detail.
                </p>
                <span className="hidden md:inline font-body leading-[1] text-sm font-bold opacity-50">
                  DESKTOP DESIGNS
                </span>
              </div>
              <div className="lg:flex items-end h-fit ">
                <DesktopCarousel />
                <button
                  className="flex gap-5 items-center h-fit lg:mt-0 mt-40 px-7.5 lg:px-10"
                  onClick={() => openGallery()}
                >
                  <span className="text-4xl text-left  md:text-5xl tracking-tight leading-[1] ">
                    VIEW <br /> GALLERY
                  </span>
                  {/* prettier-ignore */}
                  <svg className="animate__animated animate__fadeInLeft !delay-500 !duration-700" xmlns="http://www.w3.org/2000/svg" width="135" height="12" viewBox="0 0 135 12" fill="none">
                  <path d="M134.173 6.01614L124.173 0.242641V11.7896L134.173 6.01614ZM0.17334 7.01614H125.173V5.01614H0.17334V7.01614Z" fill="black"/>
                </svg>
                </button>
              </div>
            </div>

            {/* ABOUT */}
            <div
              ref={aboutRef}
              className="mt-7.5 pt-15 md:pt-15 p-7.5 md:p-15 lg:p-25 h-[565px] md:h-[850px] rounded-[20px] overflow-hidden w-full bg-cover"
              style={{ backgroundImage: "url('/imgs/portrait.png')" }}
            >
              <h1 className="relative text-5xl md:text-8xl 2xl:text-9xl text-white tracking-tight !leading-[0.8em]">
                <span className="opacity-50">POLYMATH.</span> <br />
                DESIGNER <span className="opacity-50">AND</span> <br />
                FULLSTACK ENGINEER.
                <span className=" text-xs absolute font-body opacity-50 text-white md:text-sm -top-7.5 md:top-0 right-0 tracking-normal">
                  ABOUT
                </span>
              </h1>
              <p className="max-w-[270px] font-body opacity-50 text-justify mt-7.5 tracking-tight !leading-tight text-white text-sm md:text-base">
                I'm a full-stack product engineer and an experienced designer.
                I've worked with various companies and clients over the past 3
                years, building and crafting beautiful products.
              </p>
              <button
                className="text-white flex gap-5 items-center h-fit md:mt-20 mt-20 "
                onClick={() => openGallery()}
              >
                <span className="text-4xl text-left shrink-0  md:text-5xl tracking-tight leading-[1] ">
                  VIEW
                  <br />
                  GALLERY
                </span>
                {/* prettier-ignore */}
                <svg className="relative animate__animated animate__fadeInLeft !delay-500 !duration-700" xmlns="http://www.w3.org/2000/svg" width="135" height="12" viewBox="0 0 135 12" fill="none">
                  <path d="M134.173 6.01614L124.173 0.242641V11.7896L134.173 6.01614ZM0.17334 7.01614H125.173V5.01614H0.17334V7.01614Z" fill="white"/>
                </svg>
              </button>
            </div>

            {/* CONTACT */}
            <div
              ref={contactRef}
              className="mt-7.5 pt-15 relative md:pt-15 p-7.5 md:p-15 lg:p-20 h-[565px] md:h-[700px] rounded-[20px] overflow-hidden w-full bg-black"
            >
              <img
                src="/imgs/svgs/logo-illustration.svg"
                className="absolute right-0 -bottom-96 lg:-bottom-20 left-0 lg:left-[initial] m-auto lg:m-0"
                alt=""
              />

              <div className="flex justify-center lg:justify-between items-center text-white">
                <div className="flex gap-3.75 md:gap-7.5">
                  <LinkButton
                    href="https://www.linkedin.com/in/kayode-ejisun/"
                    label="LINKEDIN"
                  />
                  <LinkButton
                    href="https://twitter.com/polymath_jones"
                    label="TWITTER"
                  />
                  <LinkButton
                    href="https://www.instagram.com/polymath.jones/"
                    label="INSTAGRAM"
                  />
                </div>
                <span className="text-white opacity-30 font-body text-sm font-bold hidden lg:inline">
                  CONTACT
                </span>
              </div>

              <form className="max-w-[350px] mt-12.5 lg:mt-[140px] space-y-2.5 z-40 m-auto lg:m-0">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-5 md:p-7.25 "
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="p-5 md:p-7.25"
                />
                <input
                  type="text"
                  placeholder="Message"
                  className="p-5 md:p-7.25"
                />
                <button className="text-sm font-body rounded-full bg-white text-black text-center font-bold w-full p-7.5">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
