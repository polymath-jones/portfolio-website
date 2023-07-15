interface Props {
  url: string;
  style?: React.CSSProperties;
  className?: string;
}
const PhoneMockup: React.FC<Props> = ({ url, className = "", style = {} }) => {
  return (
    <div
      className={`h-fit md:min-h-[725px] w-fit overflow-hidden  relative rounded-[50px] md:rounded-[65px] ${className}`}
      style={style}
    >
      <img
        src="/imgs/svgs/phone-frame.svg"
        className="h-full md:w-fit w-[300px]"
        alt=""
      />
      <div className="absolute top-[50%] translate-y-[-50%]  left-0 px-1 ">
        <img
          className="rounded-[50px] md:rounded-[70px]  max-h-full"
          src={url}
          alt=""
        />
      </div>
      <img
        src="/imgs/svgs/phone-frame.svg"
        className="z-20 absolute bottom-0 left-0 h-full "
        alt=""
      />
      <img
        src="/imgs/svgs/camera.svg"
        className="absolute m-auto left-0 right-0 w-[25%] top-5"
        alt=""
      />
    </div>
  );
};

export default PhoneMockup;
