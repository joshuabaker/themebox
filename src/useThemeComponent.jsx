import { useMemo } from "react";
import { useTheme } from "./useTheme";

export function useModifiers(component, props) {
  const theme = useTheme();

  const config = theme?.components?.[component] ?? {};
  const { baseStyles, variants, defaultVariants } = config;

  const modifierStyles = useMemo(() => {
    const selectedVariants = { ...defaultVariants, ...props };
    return Object.entries(selectedVariants).reduce((styles, [key, value]) => {
      return { ...styles, ...variants?.[key]?.[value] };
    }, {});
  }, [defaultVariants, props, variants]);

  return {
    baseStyles,
    modifierStyles,
  };
}
