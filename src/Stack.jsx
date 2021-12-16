import { useTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Flex } from "./Flex";
import { mapResponsive } from "./utils";

export const Stack = forwardRef(function Stack(
  { gap, columnGap = gap, rowGap = gap, sx, ...props },
  ref
) {
  const { gaps } = useTheme();

  return (
    <Flex
      ref={ref}
      sx={{
        "--column-gap": mapResponsive(columnGap, (gap) => gaps?.[gap]),
        "--row-gap": mapResponsive(rowGap, (gap) => gaps?.[gap]),
        mx: "calc(var(--column-gap) * -1)",
        my: "calc(var(--row-gap) * -1)",
        "& > *:not(style)": {
          mx: "var(--column-gap)",
          my: "var(--row-gap) ",
        },
        ...sx,
      }}
      {...props}
    />
  );
});
