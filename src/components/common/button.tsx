import {
  type ButtonColor,
  type ButtonSize,
  buttonColorMap,
  buttonContrastColorMap,
  buttonSizeMap,
} from "@/styles/button-style";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface ButtonProps {
  colorType?: ButtonColor;
  size?: ButtonSize;
  opposite?: boolean;
  full?: boolean;
  disabled?: boolean;
}

const Button = styled("button", {
  shouldForwardProp: (prop) =>
    prop !== "opposite" && prop !== "full" && prop !== "disabled",
})<ButtonProps>(
  {
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "6px",
  },
  ({ colorType = "primary", opposite }) =>
    opposite ? buttonContrastColorMap[colorType] : buttonColorMap[colorType],
  ({ size = "sm" }) => buttonSizeMap[size],
  ({ full }) =>
    full
      ? css`
          display: block;
          width: 100%;
          border-radius: 0;
        `
      : undefined,
  ({ disabled }) =>
    disabled
      ? css`
          opacity: 0.26;
          cursor: initial;
        `
      : undefined
);

export default Button;
