import {
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredList } from "../features/filterSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const { productList } = useSelector((state) => state.product);
  const { filteredList } = useSelector((state) => state.filter);

  const sortProducts = (e) => {
    let tempProducts = [];
    let sort = e.target.value;

    if (sort === "low") {
      tempProducts = [
        ...(filteredList?.length ? filteredList : productList).values(),
      ].sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      tempProducts = [
        ...(filteredList?.length ? filteredList : productList).values(),
      ].sort((a, b) => b.price - a.price);
    }

    if (sort === "a-z") {
      tempProducts = [
        ...(filteredList?.length ? filteredList : productList).values(),
      ].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === "z-a") {
      tempProducts = [
        ...(filteredList?.length ? filteredList : productList).values(),
      ].sort((a, b) => b.name.localeCompare(a.name));
    }
    dispatch(setFilteredList(tempProducts));
  };
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
            {filteredList?.length ? filteredList.length : productList?.length}{" "}
            Products Found
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
              onChange={sortProducts}
            >
              <option value="low">Price (Lowest)</option>
              <option value="high">Price (Highest)</option>
              <option value="a-z">Name (A-Z)</option>
              <option value="z-a">Name (Z-A)</option>
            </NativeSelect>
          </Box>
        </FormControl>
      </Box>
    </>
  );
};

export default Sort;
