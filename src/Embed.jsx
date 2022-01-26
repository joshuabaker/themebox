import { forwardRef } from "react";
import { Box } from "./Box";
import { mapResponsive } from "./utils";

export const Embed = forwardRef(function Embed(
  { embedHtml, embedRatio, ratio: containerRatio = embedRatio, sx, ...props },
  ref
) {
  if (!embedHtml) throw new Error("Missing required prop: embedHtml");
  if (!embedRatio) throw new Error("Missing required prop: embedRatio");

  return (
    <Box
      ref={ref}
      sx={{
        position: "relative",
        pb: mapResponsive(containerRatio, (ratio) => 100 / ratio + "%"),
        overflow: "hidden",
        ...sx,
      }}
      {...props}
    >
      <Box
        dangerouslySetInnerHTML={{ __html: embedHtml }}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          pb: 100 / embedRatio + "%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          transform: "translate3d(-50%, -50%, 0)",
          "& > *": {
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
        }}
      />
    </Box>
  );
});
