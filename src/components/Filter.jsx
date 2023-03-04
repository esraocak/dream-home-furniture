import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniqueValues } from "../utils/helpers";
import { getProduct } from "../features/productSlice";
import { Box, width } from "@mui/system";
import { grey } from "@mui/material/colors";
import { setFilters } from "../features/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
    // console.log(productList);
  }, []);

  const { productList } = useSelector((state) => state.product);
  const categories = getUniqueValues(productList, "category");
  const companies = getUniqueValues(productList, "company");
  const colors = getUniqueValues(productList, "colors");

  const updateFilters = (e) => {
    e.preventDefault();
    const {name,value}=e.target;
    console.log(e.target.value);
    dispatch(setFilters(e.target.value));
  };

  return (
    <>
      <Box display="flex" flexDirection="column" gap="1rem">
        {/* category */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          mt="0.8rem"
        >
          <Typography variant="h6">Category</Typography>
          <Box display="flex" flexDirection="column">
            {categories.map((c, index) => {
              return (
                <Button
                  key={index}
                  variant="text"
                  size="small"
                  sx={{ color: "gray", width: "8rem" }}
                  style={{ justifyContent: "flex-start" }}
                  value={c}
                  onClick={updateFilters}
                >
                  {c}
                </Button>
              );
            })}
          </Box>
        </Box>

        {/* company */}
        <Box>
          <Typography variant="h6">Company</Typography>
          <FormControl fullWidth>
            <Select
              sx={{
                width: "8rem",
                height: "1.8rem",
                textTransform: "uppercase",
                fontSize: "0.8rem",
                mt: "0.5rem",
              }}
              onChange={updateFilters}
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
        </Box>

        {/* colors */}
        <Box>
          <Typography variant="h6">Colors</Typography>
          <Box display="flex" mt="0.5rem" sx={{ gap: "0.5rem" }}>
            {colors.map((c, index) => {
              if (c === "all") {
                return (
                  <button
                    key={index}
                    name="color"
                    data-color="all"
                    style={{
                      background: "white",
                      border: "none",
                      width: "2rem",
                      fontSize: "1rem",
                      color: "gray",
                    }}
                    value="all"
                    onClick={updateFilters}
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
                  data-color={c}
                  value={c}
                  onClick={updateFilters}
                >
                  {/* {color === c ? <FaCheck /> : null} //!sonra ekle */}
                </button>
              );
            })}
          </Box>
        </Box>
        {/* price */}
        <Box>
          <Typography variant="h6">Price</Typography>
          <Box width={150}>
            <Slider
              defaultValue={0}
              aria-label="Default"
              valueLabelDisplay="auto"
              min={0}
              max={310000}
              onChange={updateFilters}
            />
          </Box>
        </Box>

        {/* shipping */}
        <Box>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Free Shipping"
            onChange={updateFilters}
          />
        </Box>
        {/* clear filter */}
        <Button
          size="small"
          variant="contained"
          color="error"
          sx={{
            width: "10rem",
            display: "block",
            mx: "auto",
            mb: "2rem",
            textTransform: "none",
            fontSize: "0.9rem",
          }}
          onClick={updateFilters}
        >
          Clear Filters
        </Button>
      </Box>
    </>
  );
};

export default Filter;
