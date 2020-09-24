import { darken, modularScale, stripUnit } from "polished";

import styled from "styled-components";

export const base = "#0B0C0D";
export const accent1 = "#00b377";
export const accent2 = "#ff3305";

export const linkColor = `${accent2}`;
export const linkHoverColor = darken(0.15, linkColor);

export const fontFamily = "Arial, Helvetica, sans-serif";
export const headerFontFamily = "Arial, Helvetica, sans-serif";

export const fontSizeBase = "16px";
export const fontLineHeightBase = "1.5";

export const h1Size = `${stripUnit(modularScale(2.5))}rem`;
export const h2Size = `${stripUnit(modularScale(2))}rem`;
export const h3Size = `${stripUnit(modularScale(1.5))}rem`;
export const h4Size = `${stripUnit(modularScale(1))}rem`;
export const h5Size = `${stripUnit(modularScale(0.5))}rem`;
export const h6Size = `${stripUnit(modularScale(0))}rem`;

export const bpSmall = "48em"; // 768px
export const bpMedium = "64em"; //1024px * 768px
export const bpLarge = "85.375em"; // 1366px * 768px
export const bpXlarge = "120em"; // 1920px * 1080px
export const bp4k = "160em"; //2560px * 1440px

export const mqXsmall = "(min-width: 300px)";
export const mqSmall = `(min-width: ${bpSmall})`;
export const mqMedium = `(min-width: ${bpMedium})`;
export const mqLarge = `(min-width: ${bpLarge})`;
export const mqXlarge = `(min-width: ${bpXlarge})`;
export const mqXxlarge = `(min-width: ${bp4k})`;

export const cardTypes = {
  creature: "orange",
  action: "red",
  item: "purple",
  support: "eggplant",
};

export const Layout = styled.div`
  height: 100%;
  margin: 0 2%;
  @media ${mqSmall} {
    margin: 0 4%;
  }
  @media ${mqMedium} {
    margin: 0 8%;
  }
  @media ${mqLarge} {
    margin: 0 12%;
  }
  @media ${mqXlarge} {
    margin: 0 2%;
  }
  @media ${mqXxlarge} {
    margin: 0 2%;
  }
`;

const globalStyle = `
  body {
    font-family: ${fontFamily};
    font-size: ${fontSizeBase};
    line-height: ${fontLineHeightBase};
  }
  p {
    @media ${mqMedium} {
      font-size: calc(${fontSizeBase} * 1.2);
      line-height: calc(${fontLineHeightBase} * 1.2);
    }
    @media ${mqLarge} {
      font-size: calc(${fontSizeBase} * 1.3);
    }
    @media ${mqXlarge} {
      font-size: calc(${fontSizeBase} * 1.4);
    }
    @media ${mqXxlarge} {
      font-size: calc(${fontSizeBase} * 1.6);
    }
  }

  a {
    color: ${linkColor};
    &:hover, &:active, &:focus {
      color: ${linkHoverColor};
    }
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: ${headerFontFamily};
    margin: 1rem 0;
  }
  h1 {
    font-size: ${h1Size};
  }
  h2 {
    font-size: ${h2Size};
  }
  h3 {
    font-size: ${h3Size};
  }
  h4 {
    font-size: ${h4Size};
  }
  h5 {
    font-size: ${h5Size};
  }
  h6 {
    font-size: ${h6Size};
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default globalStyle;
