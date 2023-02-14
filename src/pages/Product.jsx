import { Filter } from '@mui/icons-material';
import { Breadcrumbs, Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../features/productSlice'

const Product = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
    console.log(productList)
 
   }, []);

    const { productList,error,loading } = useSelector((state) => state.product);
   console.log(productList);

  return (
    <>
    <Box sx={{background:"#fafafa",p:"2rem", mt:"3rem"}}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ml:"8rem", fontSize:"2.2rem",fontWeight:"800"}}>
      <Link color="#6d4c41" href="/home" underline="hover" >
        Home
      </Link>
      <Typography color="textPrimary" fontSize="2.2rem" fontWeight="800">Products</Typography>
      </Breadcrumbs>
    </Box>


    {error && (
            <Typography variant="h3" color="error" align="center" mt={20}>
              {error}
            </Typography>
          )}
          {loading && (
            <Box display="flex" alignItems="center" justifyContent="center">
             loading
            </Box>
          )}
          {!loading && (
                <Box sx={{ display: "flex", flexDirection: "row", m: "5rem" }}>
          
                <Box>
      
                <Box sx={{}}
             xs={{ d: "flex" }}
              display="flex"
              alignItems="center"
              justifyContent="space-evenly"
              flexWrap="wrap"
            >
            { productList?.map((item, index) => {
              return (
                <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
                  <CardMedia
                          component="img"
                          width="175"
                    height="175"
                    image={item?.image}
                    alt="img"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.price}$
                    </Typography> 
                  </CardContent>
                  <CardActions>
                    {/* <Button onClick={()=>handleAddToCart(item)} size="small">Add to Cart</Button> */}
                    {/* <Button  size="small" target="_blank" onClick={() => handleFavorite(item)}>
                   {favoriteList?.map((i)=>i.id).includes(item.id)  ? <FavoriteRoundedIcon sx={{fill:"red"}}/> : <FavoriteBorderIcon/>}
                    </Button> */}
                  </CardActions>
                </Card>
              )})}
                </Box>
                    </Box>
                    </Box>
            )}


    
    </>
  )
}

export default Product