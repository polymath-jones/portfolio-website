import { useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import useScreenSize from "../../hooks/useScreenSize";
import SearchBar from "../form/search-bar";

interface Props {
  openSideNav: VoidFunction;
}
const TopNav: React.FC<Props> = ({ openSideNav }) => {
  const searchContainer = useRef<HTMLDivElement>(null);
  const [showFullSearch, setShowFullSearch] = useState(false);
  const { width } = useScreenSize();
  const isSmall = width < 512;
  useClickOutside(searchContainer, () => {
    setShowFullSearch(false);
  });
  return (
    <div className="py-7.5 flex items-center justify-between w-full md:pr-12.5">
      <div className="flex items-center gap-2.5 md:gap-5">
        <button
          onClick={openSideNav}
          className="space-y-1 w-5 rounded-lg bg-white h-fit xl:hidden flex-shrink-0"
        >
          <div className="w-full h-0.5 bg-secondary-400 "></div>
          <div className="w-full h-0.5 bg-secondary-400 "></div>
          <div className="w-full h-0.5 bg-secondary-400 "></div>
        </button>
        <button
          onClick={() => setShowFullSearch(true)}
          className="p-2 sm:hidden bg-primary-400 rounded-lg  border border-primary-400 "
        >
          {/* prettier-ignore */}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5.3541 0.000553316C3.94043 0.0214743 2.59056 0.59363 1.5911 1.59554C0.572324 2.6165 0 4.00108 0 5.44478C0 6.88848 0.572324 8.27307 1.5911 9.29402C2.5152 10.2183 3.74056 10.7782 5.04297 10.8714C6.34537 10.9645 7.6377 10.5847 8.68348 9.80138L12.874 14L13.9717 12.9002L9.77963 8.70008C10.5612 7.65258 10.9403 6.35818 10.8476 5.05362C10.7549 3.74905 10.1966 2.52153 9.27477 1.59554C8.76094 1.08047 8.1492 0.673917 7.47576 0.39995C6.80232 0.125984 6.08086 -0.00982865 5.3541 0.000553316ZM5.48903 1.55605C6.49887 1.57093 7.46314 1.97962 8.1771 2.69533C8.9048 3.42458 9.3136 4.41357 9.3136 5.44478C9.3136 6.476 8.9048 7.46498 8.1771 8.19424C7.44925 8.92334 6.46216 9.33293 5.43293 9.33293C4.4037 9.33293 3.41662 8.92334 2.68877 8.19424C1.96107 7.46498 1.55227 6.476 1.55227 5.44478C1.55227 4.41357 1.96107 3.42458 2.68877 2.69533C3.05576 2.32744 3.49268 2.03706 3.97367 1.84137C4.45466 1.64568 4.96995 1.54866 5.48903 1.55605Z" fill="white"/>
            </svg>
        </button>
        <div
          ref={searchContainer}
          className={`absolute sm:relative w-full mr-4 md:mr-0 top-0 right-0 py-4 sm:py-0 sm:border-none border-b border-secondary-100 border-opacity-20  bg-white ${
            !showFullSearch && isSmall && "translate-y-[-100%]"
          }`}
        >
          <SearchBar className="" label="Search for anything" />
        </div>
      </div>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2.5 sm:gap-12.5">
          <a href="#" className=" underline text-secondary-400">
            Docs
          </a>
          <button>
            {/* prettier-ignore */}
            <svg className=" w-4 md:w-5" viewBox="0 0 22 24" fill="none">
                    <path d="M17.7001 12.691C17.718 15.5176 18.8517 18.2235 20.8584 20.2183C21.0327 20.3912 21.0856 20.6531 20.9916 20.8804L20.9912 20.8815C20.8964 21.107 20.676 21.2561 20.4284 21.2549M17.7001 12.691L20.429 21.0549M17.7001 12.691V12.5968V10.6642C17.7176 9.12752 17.2154 7.63071 16.275 6.41524C15.3984 5.28217 14.1892 4.45625 12.821 4.05095C13.2642 3.42355 13.3572 2.60324 13.0487 1.88438L13.0486 1.88426C12.6962 1.06444 11.8907 0.53333 10.9982 0.53333C10.1057 0.53333 9.30018 1.06444 8.94771 1.88426L8.94766 1.88438C8.63969 2.60199 8.73182 3.42065 9.17296 4.04761C7.82501 4.42985 6.62769 5.22584 5.75338 6.32787C4.81219 7.51196 4.30025 8.97972 4.30025 10.4925L4.30025 12.5968L4.30025 12.5973C4.30723 15.4577 3.17067 18.2014 1.14185 20.2182C0.967508 20.3911 0.914577 20.6531 1.00854 20.8804L1.00898 20.8814C1.10373 21.107 1.32419 21.2561 1.57172 21.2549M17.7001 12.691L8.02208 21.2549M20.4284 21.2549C20.4282 21.2549 20.428 21.2549 20.4278 21.2549L20.429 21.0549M20.4284 21.2549H20.429V21.0549M20.4284 21.2549H13.9781M20.429 21.0549H13.8112M13.9781 21.2549C13.9899 21.1989 14.0002 21.1422 14.0089 21.085L13.8112 21.0549M13.9781 21.2549C13.6832 22.6549 12.4456 23.67 11.0001 23.67C9.55459 23.67 8.31709 22.6549 8.02208 21.2549M13.9781 21.2549H13.8112V21.0549M13.8112 21.0549L8.02208 21.2549M8.02208 21.2549H8.18896V21.0549L7.99125 21.0851C7.99999 21.1423 8.01028 21.1989 8.02208 21.2549ZM8.02208 21.2549H1.57172M1.57172 21.2549C1.57195 21.2549 1.57218 21.2549 1.57241 21.2549L1.57118 21.0549V21.2549H1.57172ZM12.7285 21.2549C12.4747 21.9799 11.7867 22.4798 11.0001 22.4799H11C10.2133 22.4798 9.52538 21.9799 9.27157 21.2549H12.7285ZM5.51233 10.4924L5.51233 10.4921C5.51037 8.98893 6.12478 7.55137 7.21241 6.51489L7.21249 6.51481C8.2998 5.47745 9.76426 4.93259 11.2651 5.00474C12.6959 5.09328 14.0376 5.73143 15.0099 6.78408L15.0099 6.78409C15.9834 7.83803 16.5119 9.2253 16.4874 10.6596H16.4873V10.663L16.4873 12.5961C16.4873 12.5962 16.4873 12.5963 16.4873 12.5964C16.4786 15.3045 17.3943 17.9297 19.0743 20.0424H2.92542C4.60545 17.9296 5.52131 15.3045 5.51233 12.5964L5.51233 10.4924ZM11.0001 1.75485C11.4118 1.75485 11.7837 2.00273 11.9416 2.38386C12.0986 2.76422 12.0121 3.20229 11.7209 3.49444C11.4288 3.78554 10.9908 3.87212 10.6105 3.71515C10.2293 3.55724 9.98134 3.18537 9.98134 2.7736C9.98134 2.21071 10.4372 1.75485 11.0001 1.75485Z" fill="#213F7D" stroke="#213F7D" stroke-width="0.4"/>
            </svg>
          </button>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <div className="h-8 w-8 sm:h-12 sm:w-12 rounded-full overflow-hidden bg-secondary-100 bg-opacity-20">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt=""
            />
          </div>
          <div className="flex items-center ">
            <span className="text-secondary-400 font-medium">Username</span>
            {/* prettier-ignore */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.39229 12.0516C9.72823 12.425 10.2751 12.4219 10.6079 12.0516L13.4829 8.857C13.8188 8.48434 13.6852 8.182 13.1845 8.182H6.81567C6.31489 8.182 6.18363 8.48746 6.51723 8.857L9.39229 12.0516Z" fill="#213F7D"/>
              </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopNav;
