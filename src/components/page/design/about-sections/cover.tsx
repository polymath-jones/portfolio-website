const Cover = () => {
  return (
    <div className="w-full">
      <div className="relative animate__animated animate__fadeIn !duration-600 w-fit  flex items-center h-[33px] text-gray-normal hover:border-gray-normal text-sm border border-outline-dark rounded-full gap-2.5 p-2.5 font-body">
        <p className="w-fit "> ABOUT ME </p>
      </div>
      {/* prettier-ignore */}
      <svg className="w-full absolute left-0 bottom-0 overflow-hidden lg:rounded-[40px] rounded-[25px] "  viewBox="0 0 1278 268" fill="none">
        <g opacity="0.5">
        <path d="M485.411 248.074C485.411 379.543 378.833 486.12 247.363 486.12C115.892 486.12 9.31461 379.543 9.31461 248.074C9.31461 116.604 115.892 10.0275 247.363 10.0275C378.833 10.0275 485.411 116.604 485.411 248.074Z" fill="#1C1C1C" stroke="#1C1C1C" stroke-width="18.6326"/>
        <path d="M640.004 364.723V374.04H649.32H723.067V355.407H658.636V134.342H640.004V364.723ZM525.006 79.3176C525.006 41.0497 556.028 10.0275 594.296 10.0275H778.092C816.36 10.0275 847.382 41.0497 847.382 79.3176V419.748C847.382 458.016 816.36 489.038 778.092 489.038H594.296C556.028 489.038 525.006 458.016 525.006 419.748V79.3176Z" fill="#1C1C1C" stroke="#1C1C1C" stroke-width="18.6326"/>
        <path d="M1315.54 84.7983V407.272C1315.54 464.734 1253.34 500.648 1203.57 471.917L924.3 310.68C874.535 281.949 874.535 210.121 924.3 181.39L1203.57 20.1534C1253.34 -8.57779 1315.54 27.3363 1315.54 84.7983Z" fill="#1C1C1C" stroke="#1C1C1C" stroke-width="18.6326"/>
        </g>
    </svg>
    </div>
  );
};
export default Cover;
