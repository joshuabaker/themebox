import { forwardRef } from "react";
import { Flex } from "./Flex";
import { useThemeComponent } from "./useThemeComponent";

export const Stack = forwardRef(function Stack(
  { spacing, spacingX = spacing, spacingY = spacing, sx, ...props },
  ref
) {
  const { base, modifierStyles } = useThemeComponent("Stack", props);
  return (
    <Flex
      ref={ref}
      sx={{
        "--spacing-x": spacingX,
        "--spacing-y": spacingY,
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
