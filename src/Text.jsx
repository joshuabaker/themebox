import { forwardRef } from "react";
import { useThemeComponent } from "./useThemeComponent";
import { Box } from "./Box";

export const Text = forwardRef(function Text({ sx, variant, ...props }, ref) {
  const { baseStyles, variants } = useThemeComponent("Text");

  return (
    <Box
      ref={ref}
      sx={{ ...baseStyles, ...variants?.[variant], ...sx }}
      {...props}
    />
  );
});
