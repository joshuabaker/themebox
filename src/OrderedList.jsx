import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const OrderedList = forwardRef(function OrderedList(
  { start = 1, sx, ...props },
  ref
) {
  const { base, modifierStyles } = useThemeComponent("OrderedList", props);
  return (
    <Box
      ref={ref}
      as={"ol"}
      sx={{
        listStyleType: "decimal",
        listStylePosition: "inside",
        ...base,
        ...modifierStyles,
        ...sx,
      }}
      {...props}
    />
  );
});
