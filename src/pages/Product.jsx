import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from 'react'
import Filter from "../components/Filter";
import ProductsComp from "../components/ProductsComp";
import Search from "../components/Search";
import Sort from "../components/Sort";

const Product = () => {
  return (
    <>
      <Box sx={{ background: "#fafafa", p: "2rem", mt: "3rem" }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ ml: "8rem", fontSize: "2.2rem", fontWeight: "800" }}
        >
          <Link color="#6d4c41" href="/home" underline="hover">
            Home
          </Link>
          <Typography color="textPrimary" fontSize="2.2rem" fontWeight="800">
            Products
          </Typography>
        </Breadcrumbs>
       </Box> 

      <Box sx={{ display:"flex", flexDirection:"column"}}> {/* en dış  */}

        {/* // ! üst kısım */}
      <Box ml="1rem" sx={{ display:"flex"}} >
       <Search/>
       <Sort/>
      </Box>

      {/* // ! alt kısım */}
      <Box>
        <Filter/>
        <ProductsComp/>
      </Box>



      </Box>
    </>
  )
}

export default Product
