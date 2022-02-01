import { forwardRef } from "react";
import { Box } from "./Box";

export const BaseAnchor = forwardRef(function BaseAnchor(
  { rel, target, ...props },
  ref
) {
  if (rel === "undefined" && target === "_blank") {
    rel = "noopener noreferrer";
  }
  return <Box ref={ref} as={"a"} rel={rel} target={target} {...props} />;
});
