import useScreenSize from "@/src/hooks/useScreenSize";

const Tools = () => {
  const {width} = useScreenSize()
  const isMd = width <= 900
  return (
    <div className=" text-[30px] sm:text-[40px] 2md:text-[50px] xl:text-[70px] 2xl:text-[80px] font-body text-[#fff]">
      {" "}
      <span className="block pl-5 lg:pl-10">
        <span className="text-[#323232]">Using </span>Tools{" "}
        <span className="text-[#323232]">like</span>
      </span>
      <figure className="max-w-[400px] lg:max-w-full 2md:top-0 top-10 relative ">
        <img className="h-full block" src={isMd?"/imgs/tools-2.png":"/imgs/tools.png"} alt="" />
      </figure>
    </div>
  );
};
export default Tools;
