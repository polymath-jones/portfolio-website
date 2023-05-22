import { useEffect, useState } from "react";
import useScreenSize from "../../hooks/useScreenSize";
import styles from "../../styles/dashboard.module.scss";
import SideNav from "../dashboard/sidenav.";
import TopNav from "../dashboard/topnav";

interface Props extends React.PropsWithChildren {}
const DashboardLayout: React.FC<Props> = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const { width } = useScreenSize();
  const isSmall = width <= 1280;

  return (
    <div className={styles.container}>
      <div
        className={`${
          isSmall &&
          "fixed z-[99] bg-black bg-opacity-30 w-full backdrop-blur-sm"
        } ${!showNav && isSmall && "hidden"}`}
      >
        <div
          className={`w-fit bg-white translate-x-[0%]"  border-r border-opacity-30 border-secondary-100  relative`}
        >
          <button
            onClick={() => setShowNav(false)}
            className="p-2.5 absolute top-2.5 -right-[50px]  rounded-lg bg-white h-fit xl:hidden"
          >
            {/* prettier-ignore */}
            <svg className="w-3 m-auto" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="1" d="M4.87999 1.85998L3.73998 2.99998L4.87999 4.13998C4.91745 4.17739 4.94717 4.22181 4.96745 4.27072C4.98773 4.31962 4.99816 4.37204 4.99816 4.42498C4.99816 4.47792 4.98773 4.53034 4.96745 4.57925C4.94717 4.62815 4.91745 4.67258 4.87999 4.70998L4.30998 5.27998C4.27258 5.31745 4.22815 5.34717 4.17925 5.36744C4.13034 5.38772 4.07792 5.39816 4.02498 5.39816C3.97204 5.39816 3.91962 5.38772 3.87072 5.36744C3.82181 5.34717 3.77739 5.31745 3.73998 5.27998L2.59997 4.13998L1.45997 5.27998C1.42256 5.31745 1.37813 5.34717 1.32923 5.36744C1.28033 5.38772 1.22791 5.39816 1.17496 5.39816C1.12202 5.39816 1.0696 5.38772 1.0207 5.36744C0.971795 5.34717 0.927369 5.31745 0.889963 5.27998L0.319958 4.70998C0.282496 4.67258 0.252775 4.62815 0.232498 4.57925C0.21222 4.53034 0.201782 4.47792 0.201782 4.42498C0.201782 4.37204 0.21222 4.31962 0.232498 4.27072C0.252775 4.22181 0.282496 4.17739 0.319958 4.13998L1.45997 2.99998L0.319958 1.85998C0.282496 1.82258 0.252775 1.77815 0.232498 1.72925C0.21222 1.68034 0.201782 1.62792 0.201782 1.57498C0.201782 1.52204 0.21222 1.46962 0.232498 1.42072C0.252775 1.37181 0.282496 1.32739 0.319958 1.28998L0.889963 0.719983C0.927369 0.68252 0.971795 0.6528 1.0207 0.632522C1.0696 0.612244 1.12202 0.601807 1.17496 0.601807C1.22791 0.601807 1.28033 0.612244 1.32923 0.632522C1.37813 0.6528 1.42256 0.68252 1.45997 0.719983L2.59997 1.85998L3.73998 0.719983C3.77739 0.68252 3.82181 0.6528 3.87072 0.632522C3.91962 0.612244 3.97204 0.601807 4.02498 0.601807C4.07792 0.601807 4.13034 0.612244 4.17925 0.632522C4.22815 0.6528 4.27258 0.68252 4.30998 0.719983L4.87999 1.28998C4.91745 1.32739 4.94717 1.37181 4.96745 1.42072C4.98773 1.46962 4.99816 1.52204 4.99816 1.57498C4.99816 1.62792 4.98773 1.68034 4.96745 1.72925C4.94717 1.77815 4.91745 1.82258 4.87999 1.85998V1.85998Z" fill="#213F7D"/>
            </svg>
          </button>
          <SideNav />
        </div>
      </div>
      <div className=" h-screen overflow-y-auto px-5 mx-0 md:px-10 xl:px-0 xl:mx-10">
        <div className="sticky w-full top-0 bg-white z-30">
          <TopNav openSideNav={() => setShowNav(true)} />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default DashboardLayout;
