import CSSReset from "@chakra-ui/css-reset";
import { Global, useTheme } from "@emotion/react";
import "focus-visible/dist/focus-visible";

export function GlobalStyles() {
  const { globalStyles } = useTheme();

  return (
    <>
      <CSSReset />
      <Global styles={globalStyles} />
    </>
  );
}
