import styled from "@emotion/styled";
import { css } from "./utils";

export const Box = styled("div")(
  ({ sx, theme }) => css(sx)(theme),
  ({ css }) => css
);
