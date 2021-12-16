import { useTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const Grid = forwardRef(function Grid(
  { variant, gap, columnGap, rowGap, sx, ...props },
  ref
) {
  const { gaps } = useTheme();
  const { baseStyles, variants } = useThemeComponent("Grid");

  return (
    <Box
      ref={ref}
      sx={{
        display: "grid",
        ...baseStyles,
        ...variants?.[variant],
        columnGap: gaps?.[gap ?? columnGap],
        rowGap: gaps?.[gap ?? columnGap],
        ...sx,
      }}
      {...props}
    />
  );
});
