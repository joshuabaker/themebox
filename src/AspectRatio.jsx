import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";
import { mapResponsive } from "./utils";

export const AspectRatio = forwardRef(function AspectRatio(
  { ratio, sx, ...props },
  ref
) {
  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        pb: mapResponsive(ratio, (ratio) => 100 / ratio + "%"),
        overflow: "hidden",
        "& > *:not(style)": {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        },
        "& > img, & > video": {
          objectFit: "cover",
        },
        ...sx,
      }}
      {...props}
    />
  );
});
