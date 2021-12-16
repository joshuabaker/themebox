import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Button = forwardRef(function Button(
  { variant, sx, ...props },
  ref
) {
  const { baseStyles, variants } = useThemeComponent("Button");

  return (
    <Box
      ref={ref}
      as={props?.href ? "a" : "button"}
      sx={{ ...baseStyles, ...variants?.[variant], ...sx }}
      {...props}
    />
  );
});
