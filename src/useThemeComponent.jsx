import { useTheme } from "@emotion/react";

export function useThemeComponent(componentKey) {
  const theme = useTheme();
  return theme?.components?.[componentKey] ?? {};
}
