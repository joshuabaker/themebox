import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Flex = forwardRef(function Flex({ sx, ...props }, ref) {
  const { base, modifierStyles } = useThemeComponent("Flex", props);
  return (
    <Box
      ref={ref}
      sx={{ display: "flex", ...base, ...modifierStyles, ...sx }}
      {...props}
    />
  );
});
