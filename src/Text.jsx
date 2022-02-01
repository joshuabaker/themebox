import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Text = forwardRef(function Text({ sx, ...props }, ref) {
  const { base, modifierStyles } = useThemeComponent("Text", props);
  return (
    <Box
      ref={ref}
      as={"p"}
      sx={{ ...base, ...modifierStyles, ...sx }}
      {...props}
    />
  );
});
