import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Button = forwardRef(function Button({ sx, ...props }, ref) {
  const { base, modifierStyles } = useThemeComponent("Button", props);
  return (
    <Box
      ref={ref}
      as={props?.href ? "a" : "button"}
      sx={{ textAlign: "center", ...base, ...modifierStyles, ...sx }}
      {...props}
    />
  );
});
