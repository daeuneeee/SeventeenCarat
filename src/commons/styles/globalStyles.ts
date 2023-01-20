import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "inthesoop";
    font-size: 10px;
  }

  @font-face {
    font-family: "anemone1";
    src: url("/fonts/anemone1.ttf");
  }

  @font-face {
    font-family: "anemone2";
    src: url("/fonts/anemone2.ttf");
  }

  @font-face {
    font-family: "yisunshin1";
    src: url("/fonts/yisunshin1.otf") format("opentype");
  }

  @font-face {
    font-family: "yisunshin2";
    src: url("/fonts/yisunshin2.otf") format("opentype");
  }

  @font-face {
    font-family: "yisunshin3";
    src: url("/fonts/yisunshin3.otf") format("opentype");
  }

  @font-face {
    font-family: "dohyun";
    src: url("/fonts/dohyun.ttf");
  }

  @font-face {
    font-family: "seungwan";
    src: url("/fonts/seungwan.ttf");
  }

  @font-face {
    font-family: "inthesoop";
    src: url("/fonts/inthesoop.ttf");
  }
`;
