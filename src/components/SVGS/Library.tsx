const Library = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className={`fill-white ${className}`}>
      <g>
        <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
      </g>
    </svg>
  );
};

export default Library;
