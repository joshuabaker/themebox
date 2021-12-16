import styled from "@emotion/styled";
import { css } from "./utils";

export const Box = styled.div(({ css: cssProp, sx, theme }) => [
  cssProp,
  css({ sx, theme }),
]);
