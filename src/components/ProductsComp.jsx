import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/productSlice";
import loadinGif from "../assets/loading.gif";
import { Card, CardActionArea, CardContent, CardMedia, Container } from "@mui/material";

const ProductsComp = () => {
  const { productList, loading, error } = useSelector((state) => state.product);
  const { filteredList } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  console.log(filteredList)

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <>
      {error && (
        <Typography variant="h3" color="error" align="center" mt={20}>
          {error}
        </Typography>
      )}
      {loading && (
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={loadinGif} />
        </Box>
      )}
      {!loading && (
        
          <Container sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignItems:"center"}}>lş g i lbrxyslşg <lhşh<gşlnht
         
             {(filteredList?.length ? filteredList : productList)?.map((item, index) => {
            return (
              <Card sx={{ minWidth:200, maxWidth: 400, m: 3 }} key={index}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    width="300"
                    image={item?.image}
                    alt={item?.name}
                  />
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      mx: "10px",
                    }}
                  >
                    <Typography gutterBottom variant="body1" component="div">
                      {item?.name}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      $ {item?.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
            </Container>
         
        
      )}
    </>
  );
};
export default ProductsComp;
