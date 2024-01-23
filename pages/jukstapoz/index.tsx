import JukstaBoard from "@/src/components/page/jukstapoz/jukstaboard";
import TopNav from "@/src/components/page/jukstapoz/nav";

const Jukstapoz = () => {
  return (
    <main className="bg-[#252525] min-h-screen pb-25 px-5 sm:px-10">
      <section className="max-w-[1320px] m-auto ">
        <TopNav />
        <p className="m-auto text-center mt-5 md:mt-10 uppercase text-white text-opacity-40 tracking-wider font-medium text-xs sm:text-sm max-w-[500px]">
          discover new possibilities & experiment with different combinations of
          design elements and styles.
        </p>
        <JukstaBoard />
      </section>
    </main>
  );
};
export default Jukstapoz;
