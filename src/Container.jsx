import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Container = forwardRef(function Container({ sx, ...props }, ref) {
  const { base, modifierStyles } = useThemeComponent("Container", props);
  return (
    <Box
      ref={ref}
      sx={{ mx: "auto", ...base, ...modifierStyles, ...sx }}
      {...props}
    />
  );
});
