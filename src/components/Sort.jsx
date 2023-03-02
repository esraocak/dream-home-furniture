import {
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";
import React from "react";

const Sort = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: " row",
          mt: "1rem",
          ml: "2rem",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Box display="flex" mr="2rem">
          <Typography textAlign="center" mt="0.8rem" width="40%" noWrap>
            22 Products Found
          </Typography>
          <Box ml="3rem">
            <hr
              style={{
                width: "30vw",
                display: "block",
                border: "none",
                borderBottom: "1px solid #808080",
                borderTop: "none",
                overFlow: "hidden",
                marginTop: "3rem",
              }}
            />
          </Box>
        </Box>

        <FormControl fullWidth>
          <Box display="flex" justifyContent="space-between">
            <InputLabel
              variant="standard"
              htmlFor="uncontrolled-native"
              margin="normal"
            >
              Sort By
            </InputLabel>

            <NativeSelect
              defaultValue="low"
              inputProps={{
                name: "sort",
                id: "uncontrolled-native",
              }}
            >
              <option value="low">Price (Lowest)</option>
              <option value="high">Price (Highest)</option>
              <option value="a">Name (A-Z)</option>
              <option value="z">Name (Z-A)</option>
            </NativeSelect>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default Sort;
