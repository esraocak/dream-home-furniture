import {
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueValues } from "../utils/helpers";
import { getProduct } from "../features/productSlice";
import { Box, width } from "@mui/system";
import { grey } from "@mui/material/colors";

const Filter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
    console.log(productList);
  }, []);

  const { productList } = useSelector((state) => state.product);
  const categories = getUniqueValues(productList, "category");
  const companies = getUniqueValues(productList, "company");
  const colors = getUniqueValues(productList, "colors");
  console.log(categories);
  return (
    <>
      {/* category */}
      <Typography variant="h6">Category</Typography>
      <Box display="flex" flexDirection="column">
        {categories.map((c, index) => {
          return (
            <Button
              key={index}
              variant="text"
              size="small"
              sx={{ color: "gray", width: "8rem" }}
            >
              {c}
            </Button>
          );
        })}
      </Box>

      {/* company */}
      <Typography variant="h6">Company</Typography>
      <FormControl fullWidth>
        <Select
          sx={{
            width: "8rem",
            height: "2rem",
            textTransform: "uppercase",
            fontSize: "0.8rem",
          }}
        >
          {companies.map((c, index) => {
            return (
              <MenuItem
                key={index}
                value={c}
                
                style={{
                  textTransform: "uppercase",
                  fontSize: "0.8rem",
                  color: grey,
                }}
              >
                {c}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      {/* colors */}

      <Typography variant="h6">Colors</Typography>
      <Box display="flex" sx={{ display: "flex", gap: "0.5rem" }}>
        {colors.map((c, index) => {
          if (c === "all") {
            return (
              <button
                key={index}
                name="color"
                data-color="all"
                // className={`${color === "all" ? "all-btn active" : "all-btn"}`}
                style={{ border: "none", width: "2rem", }}
              >
                All
              </button>
            );
          }
          return (
            <button
              key={index}
              name="color"
              style={{
                background: c,
                width: "1rem",
                height: "1rem",
                borderRadius: "50%",
                border: "none",
              }}
              // className={`${color === c ? "color-btn active" : "color-btn"}`}
              data-color={c}
            ></button>
          );
        })}
      </Box>
    </>
  );
};

export default Filter;
