import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Anchor = forwardRef(function Anchor(
  { variant, sx, ...props },
  ref
) {
  const { baseStyles, variants } = useThemeComponent("Anchor");

  if (!props?.rel && props?.target === "_blank") {
    props.rel = "noopener noreferrer";
  }

  return (
    <Box
      ref={ref}
      as={"a"}
      sx={{ ...baseStyles, ...variants?.[variant], ...sx }}
      {...props}
    />
  );
});
