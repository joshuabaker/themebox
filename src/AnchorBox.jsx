import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const AnchorBox = forwardRef(function AnchorBox({ sx, ...props }, ref) {
  const { base, modifierStyles } = useThemeComponent("AnchorBox", props);
  return (
    <Box
      ref={ref}
      sx={{ position: "relative", ...base, ...modifierStyles, ...sx }}
      {...props}
    />
  );
});
