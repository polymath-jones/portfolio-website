import AboutMe from "@/src/components/page/design/about-me";
import HeroText from "@/src/components/page/design/hero-text";
import Loader from "@/src/components/page/design/loader";
import TopNav from "@/src/components/page/design/nav";
import Project from "@/src/components/page/design/project";
import ScrollToProjects from "@/src/components/page/design/scroll-to-projects";
import "animate.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Text from "gsap/dist/TextPlugin";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Text);
export default function HomePage() {
  const root = useRef<HTMLDivElement>(null);
  //kayy.pro buy this domain
  return (
    <section
      ref={root}
      className=" bg-dark-black overflow-hidden max-w-[1360px] m-auto pb-[40px] px-5 xs:px-10 sm:px-20 lg:px-10"
    >
      <Loader/>
      <TopNav />
      <HeroText />
      <AboutMe />
      <section id="projects">
        {mockProjects.map((p, i) => (
          <Project key={i} index={i + 1} data={p as any} />
        ))}
      </section>
      <div className="w-full text-white border-b border-outline-black py-10 text-sm md:text-base">
        <button
          onClick={() => root.current?.scrollIntoView({ behavior: "smooth" })}
          className="gap-2.5 m-auto flex text-center "
        >
          <span>BACK TO TOP</span> <span>↑</span>
        </button>
      </div>
      <TopNav />
    </section>
  );
}

const mockProjects = [
  {
    client: "Koinbox",
    description:
      "We are an acclaimed interior design studio that collaborates with clients and businesses in creating bold, contemporary and timeless interiors that are elegantly liveable.",
    images: [
      "/imgs/projects/koinbox/1.png",
      "/imgs/projects/koinbox/2.png",
      "/imgs/projects/koinbox/3.png",
      "/imgs/projects/koinbox/4.png",
      "/imgs/projects/koinbox/5.png",
    ],
    link: {
      color: "orange",
      label: "ongoing",
      url: null,
    },
    caseStudy: "",
    logo: "/imgs/svgs/koinbox-logo.svg",
    tags: ["mobile"],
    isMobile: true,
  },
  {
    client: "Sevyn",
    description:
      "We are an acclaimed interior design studio that collaborates with clients and businesses in creating bold, contemporary and timeless interiors that are elegantly liveable.",
    images: [
      "/imgs/projects/sevyn/1.png",
      "/imgs/projects/sevyn/2.png",
      "/imgs/projects/sevyn/3.png",
      "/imgs/projects/sevyn/1.png",
      "/imgs/projects/sevyn/2.png",
    ],
    link: {
      color: "green",
      label: "live",
      url: "/",
    },
    caseStudy: "",
    logo: "/imgs/svgs/sevyn-logo.svg",
    tags: ["web design"],
    isMobile: false,
  },
];
