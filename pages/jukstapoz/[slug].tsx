import TopNav from "@/src/components/page/jukstapoz/nav";
import { JuksData } from "@/src/utils/data";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import gsap from "gsap";
import useCopyClipboard from "@/src/hooks/useCopyClipboard";
import router from "next/router";

interface Props {
  slug: string;
}

const Juksta: React.FC<Props> = ({ slug }) => {
  const [error, setError] = useState(false);
  const [data, setData] = useState<{ [key: string]: number[] }>();
  const [isCopied, copy] = useCopyClipboard("");
  const [result, setResult] = useState<
    { name: string; result: string; color: string; id: string }[]
  >([]);

  useEffect(() => {
    try {
      setData(JSON.parse(atob(slug)));
    } catch (e) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    if (data && result?.length == 0) {
      const res = [...result];
      Object.keys(data).forEach((id) => {
        const indexes = data[id];
        for (let i = 0; i < indexes.length; i++) {
          const index = indexes[i];
          const juk = JuksData[id];
          res.push({
            name: juk?.name,
            result: juk?.types[index],
            color: juk?.color,
            id,
          });
        }
      });
      setResult(res);
    }
  }, [data]);

  const share = () => {
    const isCopied = copy(window.location.href);
    if (isCopied)
      gsap
        .timeline()
        .to(".notification", {
          translateY: "0%",
          duration: 0.8,
          ease: "bounce.out",
        })
        .to(".notification", {
          delay: 3,
          translateY: "100%",
          duration: 0.3,
          ease: "ease.power3",
        });
  };

  return (
    <main className="bg-[#252525] min-h-screen pb-25 px-5 sm:px-10">
      <section className="max-w-[1320px] m-auto ">
        {/* notification */}
        <div className="fixed notification z-40 p-10 bottom-0 right-0 left-0 m-auto w-fit translate-y-[100%] h-[150px] ">
          <div className="w-full h-full bg-white rounded-[10px] p-5 px-10 flex flex-col justify-center items-center">
            <p className="uppercase font-semibold text-xs sm:text-sm">Url copied successfully</p>
          </div>
        </div>
        <TopNav isGenerated />
        <div className="rounded-[20px] md:rounded-[40px] bg-[#282828] border border-[#303030] p-5 py-10 md:p-10 lg:p-[50px] mt-10 md:mt-25 relative">
          {!error && result ? (
            <div className="flex flex-wrap w-full gap-1.25 lg:gap-3.75 md:justify-center">
              {result.map((r, i) => (
                <div className="flex gap-1.25 lg:gap-3.75 items-center" key={i}>
                  <div className="w-fit">
                    <span className="text-white text-opacity-30 uppercase text-xs md:text-sm font-semibold">
                      {r.name}
                    </span>
                    <h3
                      style={{ color: r.color }}
                      className=" font-display uppercase text-base sm:text-2xl lg:text-[32px]"
                    >
                      {r.result}
                    </h3>
                  </div>
                  {/* prettier-ignore */}
                  <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.1">
                  <path d="M21.8239 11.5H0.647887" stroke="white" stroke-width="2.10938"/>
                  <path d="M11.2358 0.911835V22.0879" stroke="white" stroke-width="2.10938"/>
                  </g>
                  </svg>
                </div>
              ))}
              {/* share */}
              <button
                onClick={share}
                className="bg-gray-darker right-5 top-5 font-semibold md:right-10 md:top-10 absolute sm:text-sm text-xs justify-center flex items-center h-[33px] text-white border-[#696969] border border-opacity-30 rounded-full gap-2.5 p-3.75 font-body"
              >
                <span>SHARE</span>
                {/* prettier-ignore */}
                <svg className="" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09213 0.0722663L0.128195 0.0722656V2.06425L6.68759 2.06425L0.241101 8.51074L1.64965 9.91929L8.09614 3.4728V10.0322H10.0881L10.0881 1.06826L9.09213 0.0722663Z" fill="white"/>
            </svg>
              </button>
            </div>
          ) : (
            <div>
              <p className="text-white text-opacity-90 w-full text-center uppercase m-auto">
                Oops! Something went wrong with this link
              </p>
            </div>
          )}
        </div>
        <p className="m-auto text-center md:text-base sm:text-sm  mt-10 uppercase text-white text-opacity-40 tracking-wider font-medium text-sm max-w-[500px]">
          discover new possibilities & experiment with different combinations of
          design elements and styles.
        </p>
      </section>
    </main>
  );
};

export default Juksta;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context?.params?.slug as string;
  return {
    props: {
      slug,
    },
  };
};
