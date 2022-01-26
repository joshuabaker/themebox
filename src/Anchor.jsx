import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Anchor = forwardRef(function Anchor(
  { rel, sx, target, ...props },
  ref
) {
  const { base, modifierStyles } = useThemeComponent("Anchor", props);

  if (!rel && target === "_blank") {
    rel = "noopener noreferrer";
  }

  return (
    <Box
      ref={ref}
      as={"a"}
      rel={rel}
      sx={{ ...base, ...modifierStyles, ...sx }}
      target={target}
      {...props}
    />
  );
});
