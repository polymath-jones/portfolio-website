const Process = () => {
  return (
    <div className="text-[30px] sm:text-[40px] 2md:text-[50px] xl:text-[70px] 2xl:text-[80px] relative font-body text-[#ffffff]">
      <span className="block">My process?</span>

      <span className="block sm:max-w-full max-w-[200px] relative top-1 md:top-0 sm:leading-tight">
        <span className="text-[#323232]">Brewing the</span> Perfect blend{" "}
        <span className="text-[#323232]">of </span>
      </span>

      <span className="block md:min-w-full min-w-[400px] lg:-mt-3.75">
        <span className="inline-block py-[0.3em] px-[0.8em] top-3 text-white relative rounded-full rotate-[-7.5deg] border border-outline-dark bg-dark-black-200">
          <span className="relative bottom-1 md:bottom-2 block">Form</span>
        </span>
        <span className="text-[#323232]"> & </span>
        <span className="inline-block relative top-3 text-white py-[0.3em] px-[0.6em] border border-outline-dark rounded-full bg-dark-black-200 rotate-[0deg]">
          <span className="relative bottom-1 md:bottom-2 block">Function</span>
        </span>
      </span>

      <span className="block md:min-w-full min-w-[400px] mt-5 md:mt-0 leading-tight">
        <span className="text-[#323232]">by</span> Iterating{" "}
        <span className="text-[#323232]"> constantly-</span>
      </span>
    </div>
  );
};
export default Process;
