import { forwardRef } from "react";
import { Box } from "./Box";
import { useThemeComponent } from "./useThemeComponent";

export const UnorderedList = forwardRef(function UnorderedList(
  { sx, ...props },
  ref
) {
  const { base, modifierStyles } = useThemeComponent("UnorderedList", props);
  return (
    <Box
      ref={ref}
      as={"ul"}
      sx={{
        listStyleType: "disc",
        listStylePosition: "inside",
        ...base,
        ...modifierStyles,
        ...sx,
      }}
      {...props}
    />
  );
});
