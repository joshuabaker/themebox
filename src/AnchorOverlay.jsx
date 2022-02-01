import { forwardRef } from "react";
import { BaseAnchor } from "./BaseAnchor";
import { useThemeComponent } from "./useThemeComponent";

export const AnchorOverlay = forwardRef(function AnchorOverlay(
  { sx, ...props },
  ref
) {
  const { base, modifierStyles } = useThemeComponent("AnchorOverlay", props);
  return (
    <BaseAnchor
      ref={ref}
      sx={{
        position: "static",
        "&::before": {
          content: "''",
          cursor: "inherit",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        },
        ...base,
        ...modifierStyles,
        ...sx,
      }}
      {...props}
    />
  );
});
