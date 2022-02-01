import { forwardRef } from "react";
import { Flex } from "./Flex";
import { useTheme } from "./useTheme";
import { useThemeComponent } from "./useThemeComponent";

export const Stack = forwardRef(function Stack(
  { spacing, spacingX = spacing, spacingY = spacing, sx, ...props },
  ref
) {
  const { space } = useTheme();
  const { base, modifierStyles } = useThemeComponent("Stack", props);
  return (
    <Flex
      ref={ref}
      sx={{
        "--spacing-x": space?.[spacingX] ?? spacingX,
        "--spacing-y": space?.[spacingY] ?? spacingY,
        mx: "calc(var(--spacing-x) * -1)",
        my: "calc(var(--spacing-y) * -1)",
        "& > *:not(style)": {
          mx: "var(--spacing-x)",
          my: "var(--spacing-y) ",
        },
        ...base,
        ...modifierStyles,
        ...sx,
      }}
      {...props}
    />
  );
});
