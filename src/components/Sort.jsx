import { Box, Typography } from "@mui/material";
import React from "react";

const Sort = () => {
  return (
    <>
      <Box sx={{ display: "flex",flexDirection:" row", mt:"1.8rem", ml:"3rem"}}>
        <Typography textAlign="center">
          22 Products Found
        </Typography>
        <hr
            style={{
              width: "40vw",
              display: "block",
              border: "none",
              borderBottom: "1px solid #808080",
              borderTop: "none",
              overFlow: "hidden",
              marginBottom:"1.3rem",
              marginLeft:"1rem"
            }}
          />
      </Box>
    </>
  );
};

export default Sort;
