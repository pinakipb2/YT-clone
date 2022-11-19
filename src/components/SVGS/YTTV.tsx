const YTTV = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className={`fill-white ${className}`}>
      <g>
        <path fill="#FF0000" d="M6,18h12v1H6V18z M22,6.2v9.6c0,0.66-0.54,1.2-1.2,1.2H3.2C2.54,17,2,16.46,2,15.8V6.2C2,5.54,2.54,5,3.2,5 h17.6C21.46,5,22,5.54,22,6.2z"></path>
        <polygon fill="#FFFFFF" points="15,11 10,8.35 10,13.65 "></polygon>
      </g>
    </svg>
  );
};

export default YTTV;
