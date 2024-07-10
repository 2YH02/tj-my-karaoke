import { css } from "@emotion/react";
import { colors } from "./color-palette";

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.coral};
    color: ${colors.white};
  `,
  success: css`
    background-color: ${colors.green};
    color: ${colors.white};
  `,
  error: css`
    background-color: ${colors.red};
    color: ${colors.white};
  `,
};

export const buttonContrastColorMap = {
  primary: css`
    background-color: ${colors.white};
    color: ${colors.coral};
    border: 1px solid ${colors.coral};
  `,
  success: css`
    background-color: ${colors.white};
    color: ${colors.green};
    border: 1px solid ${colors.green};
  `,
  error: css`
    background-color: ${colors.white};
    color: ${colors.red};
    border: 1px solid ${colors.red};
  `,
};

export const buttonSizeMap = {
  sm: css`
    font-size: 13px;
    padding: 8px 9px;
  `,
  md: css`
    font-size: 15px;
    padding: 10px 15px;
  `,
  lg: css`
    font-size: 18px;
    padding: 12px 10px;
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
