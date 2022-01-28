import { forwardRef } from "react";
import { useThemeComponent } from "./useThemeComponent";
import { Box } from "./Box";

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
