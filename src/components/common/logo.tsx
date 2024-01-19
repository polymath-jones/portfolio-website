import router from "next/router";

const Logo = () => {
  return (
    <>
      <div
        className="flex items-center gap-2.5 select-none cursor-pointer h-5 xl:opacity-20 hover:opacity-100"
        onClick={() => router.push("/")}
      >
        <div className="flex items-center">
          {/* prettier-ignore */}
          <svg className="animate__animated animate__fadeIn !duration-700 h-5 !delay-300"   viewBox="0 0 20 21" fill="none">
          <path d="M19.5388 10.4915C19.5388 15.7834 15.2489 20.0733 9.95691 20.0733C4.66496 20.0733 0.375 15.7834 0.375 10.4915C0.375 5.1996 4.66496 0.909668 9.95691 0.909668C15.2489 0.909668 19.5388 5.1996 19.5388 10.4915Z" fill="white" stroke="white" stroke-width="0.75"/>
          </svg>

          {/* prettier-ignore */}
          <svg className="animate__animated animate__fadeIn !delay-500 !duration-700 h-5"   viewBox="0 0 19 27" fill="white">
                <mask id="path-1-inside-1_924_236" fill="white">
                    <rect x="0.676758" y="-0.000213623" width="18.3017" height="26.7081" rx="4.21875"/>
                </mask>
                <rect x="0.676758" y="-0.000213623" width="18.3017" height="26.7081" rx="4.21875" stroke="white" stroke-width="14.3437" mask="url(#path-1-inside-1_924_236)"/>
            </svg>

          {/* prettier-ignore */}
          <svg className="animate__animated animate__fadeIn !delay-700 !duration-700 h-5"  viewBox="0 0 25 27" fill="white">
                <path d="M17.345 0.610221C20.3491 -1.1242 24.1043 1.04383 24.1043 4.51268V21.8196C24.1043 25.2885 20.3491 27.4565 17.345 25.7221L2.35662 17.0686C-0.647519 15.3342 -0.647519 10.9981 2.35662 9.26368L17.345 0.610221Z" fill="white"/>
            </svg>
        </div>
      </div>
    </>
  );
};

export default Logo;
