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
    client: "HNG",
    description:
      "HNG Internship is a large scale, fast-paced virtual internship for people learning code, design, project management and technical sales/marketing.",
    images: [
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592488/Mobile%20designs/hng/SPLASH_SCREEN_d7hde7.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592486/Mobile%20designs/hng/ONBOARDING_qfv4vq.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592489/Mobile%20designs/hng/TIMELINE_sdrpdm.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592486/Mobile%20designs/hng/MY_PEOPLE_msugh3.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592484/Mobile%20designs/hng/GROUP_SELECTED_pah4fy.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592339/Mobile%20designs/hng/CALENDAR_whpnjb.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592340/Mobile%20designs/hng/CREATE_EVENT_m7j7ze.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592340/Mobile%20designs/hng/COMMENTS_sh2ywp.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592487/Mobile%20designs/hng/SETTINGS_fjbobg.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592485/Mobile%20designs/hng/HOME-USER_mzqsr0.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592487/Mobile%20designs/hng/REDEEM_SUCCESS_ddvg6n.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592490/Mobile%20designs/hng/WITHDRAW_t7aqpb.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592340/Mobile%20designs/hng/CONFIRM_tkqghe.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707592488/Mobile%20designs/hng/SUCCESS_owtrun.png",
    ],
    link: {
      color: "orange",
      label: "figma",
      url: "https://www.figma.com/file/zpjYewPoEGfk5XnGR3MD0j/STAGE3-TASK?type=design&node-id=0-1&mode=design&t=R5L3jFcO7U3HN0Va-0",
    },
    casestudy: "https://www.behance.net/gallery/191230159/HNG-Design-Challenge",
    logo: "/imgs/svgs/hng-logo.svg",
    tags: ["mobile"],
    isMobile: true,
  },
  {
    client: "Onekard",
    description:
      "OneKard is a fintech company that aggregates bank accounts, connects payments across Africa and globally.",
    images: [
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582613/Mobile%20designs/Onekard/SPLASH_SCREEN_thqgqp.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582612/Mobile%20designs/Onekard/ONBOARDING_3_f1hvv3.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582612/Mobile%20designs/Onekard/DASHBOARD_zcdboi.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582613/Mobile%20designs/Onekard/PROFILE_ojf5qe.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582613/Mobile%20designs/Onekard/MORE_lmvykx.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582612/Mobile%20designs/Onekard/PORTFOLIO_-_TRENDS_nwaioz.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582612/Mobile%20designs/Onekard/INSIGHT_POP_UPS_qanfwn.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582612/Mobile%20designs/Onekard/ACCOUNTS_zxupll.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582611/Mobile%20designs/Onekard/ACCOUNTS-1_fhhisv.png",
      "https://res.cloudinary.com/porfolioky/image/upload/v1707582613/Mobile%20designs/Onekard/SAVINGS_OVERVIEW_NEW_grkidq.png",
    ],
    link: {
      color: "green",
      label: "live",
      url: "https://onekard.io",
    },
    casestudy: "https://www.behance.net/gallery/191224939/ONEKARD-CASE-STUDY",
    logo: "/imgs/svgs/onekard-logo.svg",
    tags: ["mobile"],
    isMobile: true,
  },
  {
    client: "Sevyn",
    description:
      "Sevyn an acclaimed interior design studio that collaborates with clients and businesses in creating bold, contemporary and timeless interiors that are elegantly liveable.",
    images: [
     "https://res.cloudinary.com/porfolioky/image/upload/v1707591261/Mobile%20designs/Sevyn/CONCEPTS_qjblnp.png",
     "https://res.cloudinary.com/porfolioky/image/upload/v1707591261/Mobile%20designs/Sevyn/CONCEPTS-3_dv2fhy.png",
     "https://res.cloudinary.com/porfolioky/image/upload/v1707591260/Mobile%20designs/Sevyn/CONCEPTS-1_qyup7l.png",
     "https://res.cloudinary.com/porfolioky/image/upload/v1707591260/Mobile%20designs/Sevyn/CONCEPTS-4_p8j7at.png",
     "https://res.cloudinary.com/porfolioky/image/upload/v1707591258/Mobile%20designs/Sevyn/CONCEPTS-2_cwm3ea.png",
    ],
    link: {
      color: "green",
      label: "live",
      url: "https://sevyndesigns.com",
    },
    casestudy: "https://www.behance.net/gallery/191228297/SEVYN-CASE-STUDY",
    logo: "/imgs/svgs/sevyn-logo.svg",
    tags: ["UI & Branding"],
    isMobile: false,
  },
];
