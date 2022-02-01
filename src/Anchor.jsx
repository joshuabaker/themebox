import { forwardRef } from "react";
import { BaseAnchor } from "./BaseAnchor";
import { useThemeComponent } from "./useThemeComponent";

export const Anchor = forwardRef(function Anchor({ sx, ...props }, ref) {
  const { base, modifierStyles } = useThemeComponent("Anchor", props);
  return (
    <BaseAnchor
      ref={ref}
      sx={{ ...base, ...modifierStyles, ...sx }}
      {...props}
    />
  );
});
