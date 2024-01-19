const Bio = () => {
  return (
    <div className=" text-[30px] sm:text-[40px] 2md:text-[50px] xl:text-[70px] 2xl:text-[80px] font-body text-[#fff]">
      <span className="block">
        Holla, <span className="text-[#323232]">me again. I'm</span>
      </span>

      <span className="block mt-2 sm:mt-1 -ml-5 text-white relative">
        <span className="inline-block relative 2md:top-0  py-[0.3em] px-[0.8em] rounded-full border border-outline-dark bg-dark-black-200">
          <span className="relative bottom-1 md:bottom-2 block">Kayode</span>
        </span>
        <span className=" inline-block relative right-2.5 2md:right-5 bottom-2 py-[0.3em] px-[1.2em] border border-outline-dark rounded-full bg-dark-black-200 rotate-[-7.5deg]">
          <span className="relative bottom-1 md:bottom-2 block">Ejisun</span>
        </span>
      </span>

      <span className="block 2md:-mt-1 z-10 relative">
        <span className="text-[#323232]">& I’m an </span> Interaction 
        <span className="text-[#323232]"> designer based in </span> Lagos, Nigeria-
      </span>
    </div>
  );
};
export default Bio;
