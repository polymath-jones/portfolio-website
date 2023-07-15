interface Props {
  label: string;
  href: string;
}
export const LinkButton: React.FC<Props> = ({ label, href }) => {
  return (
    <button className="flex text-sm items-center gap-2.5">
      <a href={href} className="text-xs md:text-sm">
        {label}
      </a>
      {/* prettier-ignore */}
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.811 1.03468C11.811 0.482399 11.3633 0.0346836 10.811 0.034684L1.81102 0.0346841C1.25873 0.0346838 0.811019 0.482399 0.811019 1.03468C0.811019 1.58697 1.25873 2.03468 1.81102 2.03468L9.81102 2.03468L9.81102 10.0347C9.81102 10.587 10.2587 11.0347 10.811 11.0347C11.3633 11.0347 11.811 10.587 11.811 10.0347L11.811 1.03468ZM1.76277 11.4971L11.5181 1.74179L10.1039 0.327577L0.348557 10.0829L1.76277 11.4971Z" fill="#888888"/>
                </svg>
    </button>
  );
};
