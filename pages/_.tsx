import Logo from "@/src/components/common/logo";
import "animate.css";
import Head from "next/head";
import router from "next/router";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="w-full h-screen bg-gray-100">
        <div className="max-w-[1500px] h-full m-auto pt-7.5 md:pt-[50px] px-5 md:px-[40px]">
          <Logo />
          <div className="flex flex-col  md:grid min-h-[700px] md:h-[750px] overflow-hidden grid-cols-2 rounded-[20px] mt-7.5 md:mt-[70px]">
            <div
              className="bg-black flex-1 overflow-hidden p-7.5 md:p-12.5 relative mb-2.5 md:mb-0 cursor-pointer"
              onClick={() => router.push("/design")}
            >
              <div className="flex items-center">
                <div className="text-white bg-black z-20 pr-7.5 text-4xl md:text-5xl flex flex-col space-y-[-10px]">
                  <h1 className="animate__animated animate__fadeInUp !delay-500 !duration-700">
                    Design
                  </h1>
                  <h1 className="animate__animated animate__fadeInUp !delay-700 !duration-700">
                    Portfolio
                  </h1>
                  <h1 className="animate__animated animate__fadeInUp !delay-1000 !duration-700">
                    <span className="opacity-50">Page</span>
                  </h1>
                </div>

                {/* prettier-ignore */}
                <svg className="animate__animated animate__fadeInLeft !delay-500 !duration-700" xmlns="http://www.w3.org/2000/svg" width="135" height="12" viewBox="0 0 135 12" fill="none">
                  <path d="M134.173 6.01614L124.173 0.242641V11.7896L134.173 6.01614ZM0.17334 7.01614H125.173V5.01614H0.17334V7.01614Z" fill="white"/>
                </svg>
              </div>

              <div className="absolute -right-5 -bottom-7.5 md:-right-10 md:-bottom-12.5">
                <img
                  src="/imgs/svgs/design-illustration.svg"
                  alt="Design illustration"
                  className="w-[150px] md:w-[300px] animate__animated animate__fadeInRight !delay-700 !duration-1000"
                />
              </div>
            </div>

            <a
              href="https://github.com/polymath-jones"
              className="overflow-hidden block flex-1 p-7.5 md:p-12.5 bg-white relative cursor-pointer"
            >
              <div className="flex items-center">
                <div className="text-black  bg-white z-20 pr-7.5 text-4xl md:text-5xl flex flex-col space-y-[-7px]">
                  <h1 className="animate__animated animate__fadeInUp !delay-500 !duration-700 font-display tracking-tighter font-medium">
                    Dev
                  </h1>
                  <h1 className="animate__animated animate__fadeInUp !delay-700 !duration-700 font-display tracking-tighter font-medium">
                    Portfolio
                  </h1>
                  <h1 className="animate__animated animate__fadeInUp !delay-1000 !duration-700 tracking-tighter font-medium">
                    <span className="opacity-50">Page</span>
                  </h1>
                </div>

                {/* prettier-ignore */}
                <svg className="animate__animated animate__fadeInLeft !delay-500 !duration-700" xmlns="http://www.w3.org/2000/svg" width="135" height="12" viewBox="0 0 135 12" fill="none">
                  <path d="M134.173 6.01614L124.173 0.242641V11.7896L134.173 6.01614ZM0.17334 7.01614H125.173V5.01614H0.17334V7.01614Z" fill="black"/>
                </svg>
              </div>

              <div className="absolute -right-5 -bottom-7.5 md:-right-10 md:-bottom-12.5">
                <img
                  src="/imgs/svgs/dev-illustration.svg"
                  alt="Design illustration"
                  className="w-[170px] md:w-[325px] animate__animated animate__fadeInRight !delay-1000 !duration-1000"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
