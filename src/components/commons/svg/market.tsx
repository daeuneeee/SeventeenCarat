const MarketSvg = () => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.55 10.9999C15.3 10.9999 15.96 10.5899 16.3 9.96991L19.88 3.47991C20.25 2.81991 19.77 1.99991 19.01 1.99991H4.21L3.27 -9.15527e-05H0V1.99991H2L5.6 9.58991L4.25 12.0299C3.52 13.3699 4.48 14.9999 6 14.9999H18V12.9999H6L7.1 10.9999H14.55ZM5.16 3.99991H17.31L14.55 8.99991H7.53L5.16 3.99991ZM6 15.9999C4.9 15.9999 4.01 16.8999 4.01 17.9999C4.01 19.0999 4.9 19.9999 6 19.9999C7.1 19.9999 8 19.0999 8 17.9999C8 16.8999 7.1 15.9999 6 15.9999ZM16 15.9999C14.9 15.9999 14.01 16.8999 14.01 17.9999C14.01 19.0999 14.9 19.9999 16 19.9999C17.1 19.9999 18 19.0999 18 17.9999C18 16.8999 17.1 15.9999 16 15.9999Z"
        // fill="linear-gradient (to right, #F8CACC, #8DA4D0)"
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

export default MarketSvg;
