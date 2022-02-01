import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const ListItem = forwardRef(function ListItem({ sx, ...props }, ref) {
  const { base, modifierStyles } = useThemeComponent("ListItem", props);
  return (
    <Box
      ref={ref}
      as={"li"}
      sx={{ ...base, ...modifierStyles, ...sx }}
      {...props}
    />
  );
});
