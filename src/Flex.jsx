import { forwardRef } from "react";
import { Box } from "./Box";

export const Flex = forwardRef(function Flex({ sx, ...props }, ref) {
  return <Box ref={ref} sx={{ display: "flex", ...sx }} {...props} />;
});
