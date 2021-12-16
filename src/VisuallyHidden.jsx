import { Box } from "./Box";
import { forwardRef } from "react";

export const VisuallyHidden = forwardRef(function VisuallyHidden(
  { sx, ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      sx={{
        position: "absolute !important",
        width: "1px !important",
        height: "1px !important",
        padding: "0 !important",
        margin: "-1px !important",
        overflow: "hidden !important",
        clip: "rect(0,0,0,0) !important",
        whiteSpace: "nowrap !important",
        border: "0 !important",
        ...sx,
      }}
      {...props}
    />
  );
});
