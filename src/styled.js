import emotionStyled from "@emotion/styled";
import { css } from "./utils";

// @todo: Port to TS to allow intrinsic elements (e.g. styled.div)
export const styled =
  (component) =>
  (...args) =>
    emotionStyled(component)(
      ({ sx, theme }) => css(sx)(theme),
      ({ css }) => css,
      ...args
    );
