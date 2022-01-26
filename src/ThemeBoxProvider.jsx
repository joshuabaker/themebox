import CSSReset from "@chakra-ui/css-reset";
import { Global, ThemeProvider } from "@emotion/react";
import "focus-visible/dist/focus-visible";
import { css } from "./utils";

export function ThemeBoxProvider({ theme, resetCss = true, children }) {
  return (
    <ThemeProvider theme={theme}>
      {resetCss && <CSSReset />}
      <Global styles={(theme) => theme.globalStyle && css(theme.globalStyle)} />
      {children}
    </ThemeProvider>
  );
}
