import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Graphic = forwardRef(function Graphic({ sx, ...props }, ref) {
  const { base, modifierStyles } = useThemeComponent("Graphic", props);
  return (
    <Box
      ref={ref}
      as={"svg"}
      sx={{ ...base, ...modifierStyles, ...sx }}
      {...props}
    />
  );
});
