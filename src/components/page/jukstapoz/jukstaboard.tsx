import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { JuksData } from "@/src/utils/data";
import { generateAngle, selectRandomIndex } from "@/src/utils/functions";
import { useListener } from "@/src/hooks/useListener";
import router from "next/router";

interface Props {}
const JukstaBoard: React.FC<Props> = ({}) => {
  const root = useRef(null);
  const juks = Object.keys(JuksData);
  const [dir, setDir] = useState(1);
  const [generatedJuk, setGeneratedJuk] = useState(
    juks.reduce((p, c) => {
      p[c] = { indexes: [], qty: 1 };
      return p;
    }, {} as { [key: string]: { indexes: number[]; qty: number } })
  );

  useListener(
    "generate",
    () => {
      let tl = gsap.timeline();
      juks.forEach((v, i) => {
        tl = tl.to(
          `.semi-circle-${i}`,
          {
            rotate: `${(2880 + generateAngle()) * dir}deg`,
            duration: 1,
          },
          "<+=0.1"
        );
      });
      tl.add(() => {
        setDir(dir * -1);
      }, "<").add(() => {
        const copy = { ...generatedJuk };
        Object.keys(generatedJuk).forEach((id, i) => {
          const data = copy[id];
          if (data.qty === 0) delete copy[id];
          for (let i = 0; i < data.qty; i++) {
            const contents = JuksData[id];
            const index = selectRandomIndex(contents?.types);
            copy[id].indexes.push(index);
          }
          (copy[id] as any) = [...copy[id].indexes];
        });

        const base64 = btoa(JSON.stringify(copy));
        window.open(`${router.basePath}/jukstapoz/${base64}`);
        setGeneratedJuk(
          juks.reduce((p, c) => {
            p[c] = { indexes: [], qty: 1 };
            return p;
          }, {} as { [key: string]: { indexes: number[]; qty: number } })
        );
      });
    },
    [dir, generatedJuk]
  );

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      juks.forEach((v, i) => {
        tl.set(`.semi-circle-${i}`, {
          rotate: `${generateAngle()}"deg"`,
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const handleIncrement = (dir: "+" | "-", key: string) => {
    const copy = { ...generatedJuk };
    if (dir === "+") {
      copy[key].qty += 1;
      setGeneratedJuk(copy);
      return;
    }
    if (copy[key].qty > 0) {
      copy[key].qty -= 1;
      setGeneratedJuk(copy);
    }
  };
  return (
    <div ref={root} className="w-full mt-5 md:mt-10 flex-col items-center">
      <div className="max-w-full flex gap-3.5 lg:gap-7.5 justify-center flex-wrap">
        {juks.map((k, i) => {
          const { color, name } = JuksData[k];
          const qty = generatedJuk[k].qty;
          return (
            <div
              key={i}
              className=" w-36 h-36 sm:w-40 sm:h-40 xl:w-60 xl:h-60  lg:w-52 lg:h-52 bg-[#282828] z-10 cursor-pointer select-none overflow-hidden relative rounded-[20px] border border-[#5C5C5C] border-opacity-10"
            >
              <div
                className={` aspect-square semi-circle-${i} -z-10 h-[80%] origin-center rotate-[30deg] absolute top-[50%] translate-y-[-50%] right-0 left-0 mx-auto `}
              >
                {/* prettier-ignore */}
                <svg className={`h-full text-transparent duration-300  `} viewBox="0 0 103 205" fill="none">
              <path d="M58.5001 102.5C58.5001 126.638 77.9337 146.238 102.008 146.506L102.008 203.518C46.447 203.249 1.48899 158.125 1.48899 102.5C1.489 46.8752 46.447 1.75099 102.008 1.48174L102.008 58.4944C77.9337 58.7624 58.5001 78.3617 58.5001 102.5Z" fill="currentColor" stroke={qty==0?"#fff1": color}/>
              </svg>
              </div>
              {/* controls */}
              <div className="flex juk-controls  h-full justify-end relative z-10">
                <div className="h-full p-5 flex flex-col justify-between items-end">
                  <div className="w-fit tracking-wider font-semibold lg:text-sm uppercase text-xs bg-[#282828] justify-center flex items-center h-[33px] text-white border-[#696969] border border-opacity-30 rounded-full gap-2.5 p-2.5 font-body">
                    <span> {name} </span>
                  </div>

                  {/* buttons */}
                  <div className="items-center juk-buttons hidden gap-2.5">
                    <button
                      onClick={() => handleIncrement("-", k)}
                      className="w-9 h-9 rounded-full bg-[#282828] border hover:border-[#fff8] border-[#fff1]"
                    >
                      {/* prettier-ignore */}
                      <svg className="mx-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5312 7.69073H0.163298" stroke="white" stroke-width="2.10938"/>
                  </svg>
                    </button>
                    <span className="text-white font-semibold text-sm">
                      {qty}
                    </span>
                    <button
                      onClick={() => handleIncrement("+", k)}
                      className="w-9 h-9 rounded-full bg-[#282828] border hover:border-[#fff8] border-[#fff1]"
                    >
                      {/* prettier-ignore */}
                      <svg className="mx-auto" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.21497 0.00665283V15.3746" stroke="white" stroke-width="2.10938"/>
                      <path d="M15.899 7.69073H0.531096" stroke="white" stroke-width="2.10938"/>
                  </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default JukstaBoard;
