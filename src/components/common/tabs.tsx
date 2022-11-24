import { useRef} from "react";

interface Props {
  tabs: string[];
  active: number;
  switchTab: (tab: number) => void;
}

const Tabs: React.FC<Props> = ({ tabs, active, switchTab }) => {
  const tabsWrapper = useRef<HTMLDivElement>(null);
    return ( 
      <div className="relative flex items-start">
        <div
          className="w-full flex overflow-x-auto space-x-12 md:space-x-15 relative"
          style={{ scrollBehavior: "smooth" }}
          ref={tabsWrapper}
        >
          {tabs.map((tab, index) => (
            <button
              className={`flex-shrink-0 flex items-center py-2.5 border-b-2 lg:py-3 no-outline transition-all duration-200 ease-out font-medium ${active === index
                ? "border-primary-400 text-primary-400"
                : "border-transparent text-secondary-100"
                }`}
              type="button"
              onClick={() => switchTab(index)}
              key={index}
            >
              <span className="text-sm sm:text-base inline-block whitespace-nowrap">{tab}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

export default Tabs;
