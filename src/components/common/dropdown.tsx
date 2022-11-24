import cx from "classnames";
import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
interface Props extends PropsWithChildren {
  items: DropdownItem[];
  vPosition?: "TOP" | "BOTTOM";
  className?: string;
}

const Dropdown: React.FC<Props> = (props) => {
  const { vPosition = "BOTTOM", className } = props;
  const [opened, setOpened] = useState(false);
  const buttonClass =
    "flex items-center p-2 pl-4 text-dark pr-2 hover:bg-gray-100 w-full hover:bg-opacity-50 duration-150";
  const toggleCaret = useRef<SVGElement|null>(null);
  var dropdown = useRef<HTMLDivElement>(null);

  useClickOutside(dropdown, () => {
    setOpened(false);
  });

  useEffect(() => {
    if (dropdown.current) {
      const toggleCaretEl = dropdown.current.querySelector(".dropdown-caret") as SVGElement;
      const toggleEl = dropdown.current.querySelector(".dropdown-toggle");

      if (toggleCaretEl) {
        toggleCaret.current = toggleCaretEl;
      }

      if (toggleEl) {
        const toggleFn = () => {
          setOpened(!opened);
        };
        toggleEl.addEventListener("click", toggleFn);

        return () => {
          toggleEl.removeEventListener("click", toggleFn);
        };
      }
    }
  }, [opened]);

  useEffect(() => {
    if (toggleCaret.current) {
      toggleCaret.current.classList.toggle("rotate-180");
    }
  }, [opened]);

  // const handleItemClick = (item: DropdownItem) => {
  //   if (item.onClick) item.onClick();
  // };

  return (
    <div ref={dropdown} className={cx("z-[900] inline-block relative", className)} onClick={(e) => e.stopPropagation()}>
      {props.children}

      <div
        className={cx(
          `w-full rounded-10 bg-white shadow-md absolute transform transition ease-out duration-300 right-0 min-w-[180px] overflow-hidden`,
          { "opacity-1 translate-y-0": opened },
          { "pointer-events-none opacity-0 translate-y-4": !opened },
          { "top-[calc(100%+15px)]": vPosition === "BOTTOM" },
          { "bottom-[calc(100%+15px)]": vPosition === "TOP" }
        )}
      >
        <ul>
          {props.items.map((item, index) => (
            <li key={index.toString()} onClick={() => setOpened(false)}>
              {/* {opened && ( */}
              {item.onClick && (
                <button key={index.toString()} onClick={item.onClick} className={cx(buttonClass, item.className)}>
                  {item.icon ? item.icon : null}
                  <span className="pt-0.5 text-sm ml-2 whitespace-nowrap inline-block">{item.text}</span>
                </button>
              )}
              {item.link && (
                <a
                  {...{
                    target: item.link.includes("http") ? "_blank" : "",
                    relative: item.link.includes("http") ? "noreferrer" : "",
                    href: item.link,
                  }}
                  className={cx(buttonClass, item.className)}
                >
                  {item.icon ? item.icon : null}
                  <span className="pt-0.5 text-sm ml-2 whitespace-nowrap inline-block">{item.text}</span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export type DropdownItem = {
  text: string;
  link?: string;
  onClick?: () => void;
  icon?: JSX.Element;
  className?: string;
};

export default Dropdown;
