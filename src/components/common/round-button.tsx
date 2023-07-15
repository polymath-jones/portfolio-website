interface Props {
  onclick: VoidFunction;
}
const RoundButton: React.FC<Props> = ({ onclick }) => {
  return (
    <button onClick={onclick} className="rounded-full !bg-[#b4b4b48c] p-7.5">
      {/* prettier-ignore */}
      <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9779 0.806693C15.6445 -0.732908 18.9779 1.19159 18.9779 4.27079V16.4663C18.9779 19.5455 15.6445 21.47 12.9779 19.9304L2.41626 13.8326C-0.250407 12.293 -0.250408 8.44404 2.41626 6.90443L12.9779 0.806693Z" fill="#0B0B0B"/>
        </svg>
    </button>
  );
};

export default RoundButton;
