import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../features/productSlice";
import {
  addToFavoriteList,
  removeFromFavouriteList,
} from "../features/favoriteSlice";
import loadinGif from "../assets/loading.gif";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
} from "@mui/material";
import Details from "../pages/Details";


const ProductsComp = () => {
  const dispatch = useDispatch();
  const { productList, loading, error } = useSelector((state) => state.product);
  const { filteredList } = useSelector((state) => state.filter);
  const { favoriteList } = useSelector((state) => state.favorite);
  console.log(filteredList)

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const handleFavorite = (item) => {
    if (favoriteList.map((i) => i.id).includes(item.id)) {
      dispatch(removeFromFavouriteList(item));
    } else {
      dispatch(addToFavoriteList(item));
    }
  };

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
        <Container
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            mt:"1.5rem"
          }}
        >
          {(filteredList?.length ? filteredList : productList)?.map(
            (item, index) => {
              return (
                <Card sx={{ minWidth: 200, maxWidth: 400, m: 3 }} key={index}>
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
                  <CardActions >
                    <Button
                      size="small"
                      sx={{ color: "gray",ml:"1rem" }}
                      /*onClick={() => handleAddToCart(item)}*/
                    >
                      Add to Cart
                    </Button>
                    <Button
                      size="small"
                      target="_blank"
                      sx={{ color: "gray",ml:"2rem" }}
                      onClick={() => handleFavorite(item)}
                    >
                      {favoriteList?.map((i) => i.id).includes(item.id) ? (
                        <FavoriteRoundedIcon sx={{ fill: "red" }} />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </Button>
                  </CardActions>
                </Card>
              );
            }
          )}
        </Container>
      )}
    </>
  );
};
export default ProductsComp;
