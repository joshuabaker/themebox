import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { GlobalStyles } from "./GlobalStyles";

export function ThemeProvider({ theme, children }) {
  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </EmotionThemeProvider>
  );
}