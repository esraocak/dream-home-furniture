import { TextField } from "@mui/material";
import React from "react";

const Search = () => {
  return (
    <>
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        variant="filled"
        size="small"
        color="black"
        placeholder="Search"
        margin="normal"
        sx={{width:"10rem"}}
      />
    </>
  );
};

export default Search;
