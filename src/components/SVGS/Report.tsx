const Report = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className={`fill-white ${className}`}>
      <g>
        <path d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"></path>
      </g>
    </svg>
  );
};

export default Report;
