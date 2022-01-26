import { useMemo } from "react";
import { useTheme } from "./useTheme";

export function useThemeComponent(component, props) {
  const theme = useTheme();

  const config = theme?.components?.[component] ?? {};
  const { base, modifiers, defaultModifiers } = config;

  const modifierStyles = useMemo(() => {
    const selectedModifiers = { ...defaultModifiers, ...props };
    return Object.entries(selectedModifiers).reduce((styles, [key, value]) => {
      return { ...styles, ...modifiers?.[key]?.[value] };
    }, {});
  }, [defaultModifiers, props, modifiers]);

  return { base, modifierStyles };
}
