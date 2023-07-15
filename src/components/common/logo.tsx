import router from "next/router";

const Logo = () => {
  return (
    <>
      <div
        className="flex items-center gap-2.5 select-none cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="flex items-center">
          {/* prettier-ignore */}
          <svg className="animate__animated animate__fadeInLeft !duration-700" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
            <path d="M22.8955 13.2758C22.8955 18.5884 18.5887 22.8953 13.2759 22.8953C7.96307 22.8953 3.65625 18.5884 3.65625 13.2758C3.65625 7.96308 7.96307 3.65625 13.2759 3.65625C18.5887 3.65625 22.8955 7.96308 22.8955 13.2758Z" stroke="url(#paint0_linear_922_4294)" stroke-width="7.3125"/>
            <defs>
                <linearGradient id="paint0_linear_922_4294" x1="10.7464" y1="-3.43763" x2="33.008" y2="18.0888" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EBE73A"/>
                <stop offset="0.332326" stop-color="#0DA655"/>
                <stop offset="0.710033" stop-color="#63B5DF"/>
                <stop offset="1" stop-color="#F84649"/>
                </linearGradient>
            </defs>
            </svg>

          {/* prettier-ignore */}
          <svg className="animate__animated animate__fadeInLeft !delay-100 !duration-700" width="19" height="27" viewBox="0 0 19 27" fill="white" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_924_236" fill="white">
                    <rect x="0.676758" y="-0.000213623" width="18.3017" height="26.7081" rx="4.21875"/>
                </mask>
                <rect x="0.676758" y="-0.000213623" width="18.3017" height="26.7081" rx="4.21875" stroke="black" stroke-width="14.3437" mask="url(#path-1-inside-1_924_236)"/>
            </svg>

          {/* prettier-ignore */}
          <svg className="animate__animated animate__fadeInLeft !delay-300 !duration-700" width="25" height="27" viewBox="0 0 25 27" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.345 0.610221C20.3491 -1.1242 24.1043 1.04383 24.1043 4.51268V21.8196C24.1043 25.2885 20.3491 27.4565 17.345 25.7221L2.35662 17.0686C-0.647519 15.3342 -0.647519 10.9981 2.35662 9.26368L17.345 0.610221Z" fill="black"/>
            </svg>
        </div>
        <div className="animate__animated !delay-700 !duration-[2000ms] animate__fadeInLeft">
          <span className="font-body opacity-50 text-sm  tracking-[-0.3px]">
            Polymath-jones
          </span>
        </div>
      </div>
    </>
  );
};

export default Logo;
