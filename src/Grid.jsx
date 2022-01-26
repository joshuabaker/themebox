import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Grid = forwardRef(function Grid({ sx, ...props }, ref) {
  const { base, modifierStyles } = useThemeComponent("Grid", props);
  return (
    <Box
      ref={ref}
      sx={{ display: "grid", ...base, ...modifierStyles, ...sx }}
      {...props}
    />
  );
});
