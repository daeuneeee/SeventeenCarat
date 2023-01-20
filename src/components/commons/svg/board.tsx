const BoardSvg = () => {
  return (
    <svg
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13.9999H12V15.9999H4V13.9999ZM4 9.99991H12V11.9999H4V9.99991ZM10 -9.15527e-05H2C0.9 -9.15527e-05 0 0.899909 0 1.99991V17.9999C0 19.0999 0.89 19.9999 1.99 19.9999H14C15.1 19.9999 16 19.0999 16 17.9999V5.99991L10 -9.15527e-05ZM14 17.9999H2V1.99991H9V6.99991H14V17.9999Z"
        fill="url(#pink-blue)"
      />

      <defs>
        <linearGradient id="pink-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F8CACC" />
          <stop offset="100%" stopColor="#8DA4D0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BoardSvg;
