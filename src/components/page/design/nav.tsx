import Logo from "../../common/logo";

interface Props {}
const TopNav: React.FC<Props> = () => {
  return (
    <div className="pt-10 sm:pt-[65px] flex justify-between sm:items-center ">
      <div className="relative top-1.25 sm:top-0">
      <Logo />
      </div>
      <div className="flex flex-col sm:flex-row gap-1.25 sm:items-center">
        {linkData.map((l, i) => (
          <a href={l.url} target="_blank" key={i} style={{animationDelay: `${i*200 + 7000}ms !important`}} className="animate__animated animate__fadeIn !duration-600 sm:text-sm text-xs justify-center flex items-center h-[33px] text-white hover:border-outline-dark border border-outline-black rounded-full gap-2.5 p-2.5 font-body">
            <span> {l.label} </span>
            {/* prettier-ignore */}
            <svg className="sm:inline hidden" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09213 0.0722663L0.128195 0.0722656V2.06425L6.68759 2.06425L0.241101 8.51074L1.64965 9.91929L8.09614 3.4728V10.0322H10.0881L10.0881 1.06826L9.09213 0.0722663Z" fill="white"/>
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};
export default TopNav;

const linkData = [
  {
    label: "BEHANCE",
    url: "https://www.behance.net/kayodeejisun",
  },
  {
    label: "CONTACT",
    url: "https://www.linkedin.com/in/kayode-ejisun/",
  },
];
