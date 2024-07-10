import { css } from "@emotion/react";

export const colorPalette = css`
  :root {
    --white: #fff;
    --black: #212121;
    --grey: #9e9e9e;
    --red: #f55656;
    --blue: #2196f3;
    --green: #62c466;
    --coral: #f9b4ab;
    --beige: #fdebd3;
    --dark-teal: #264e70;
    --grayish-teal: #679186;
    --pale-mint: #679186;
  }
`;

export const colors = {
  white: "var(--white)",
  black: "var(--black)",
  grey: "var(--grey)",
  red: "var(--red)",
  blue: "var(--blue)",
  green: "var(--green)",
  coral: "var(--coral)",
  beige: "var(--beige)",
  darkTeal: "var(--dark-teal)",
  grayishTeal: "var(--grayish-teal)",
  paleMint: "var(--pale-mint)",
};

export type Colors = keyof typeof colors;
