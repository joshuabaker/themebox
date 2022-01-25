import { useTheme } from "@emotion/react";
import { mapObject } from "./utils";

export function useThemeComponent(componentKey) {
  const theme = useTheme();

  const { base, variants, defaultVariants } =
    theme?.components?.[componentKey] ?? {};

  const getVariantStyles = function getVariantStyles(componentProps) {
    return mapObject(
      { ...defaultVariants, ...componentProps },
      (value, key) => variants?.[key]?.[value]
    );
  };

  return {
    base,
    defaultVariants,
    getVariantStyles,
    variants,
  };
}
