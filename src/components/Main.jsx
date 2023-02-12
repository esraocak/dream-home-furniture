import  Button  from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import Container from '@mui/system/Container'
import React, { useEffect } from 'react'
import hero1 from '../assets/hero-bcg.jpeg'
import hero2 from '../assets/hero-bcg-2.jpeg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AlarmIcon from '@mui/icons-material/Alarm';
import { CardActionArea } from '@mui/material';
import { Avatar, TextField} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../features/productSlice'
import { useNavigate } from 'react-router-dom'
import { services } from '../utils/constants'



const Home = () => {

  const { productList } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const navigate =useNavigate();

  useEffect(() => {
    dispatch(getProduct());
    console.log(productList)
 
   }, []);

 

    return (
        <>
        {/* //! Birinci kisim Design your  */}
        <Box sx={{display: "flex",flexDirection: "row",justifyContent: "center", gap:"15rem" }}>
            <Box align="start" sx={{display:"flex", flexDirection:"column", gap:"20px", width:"30vw",  justifyContent:"center"}}>
                <Typography variant="h2">
                    Desing Your Dream Home
                </Typography>
                <Typography variant="body1" align="justify">
                            Lorem ipsum, dolor sit amet consectetur  adipisicing elit. Laborum cum fuga laudantium? Excepturi reiciendis minus doloribus quas reprehenderit pariatur alias dolor veniam sit libero architecto, enim atque temporibus ipsam consequuntur!
                </Typography>
                <Button onClick={()=>navigate("/products")} variant="contained" sx={{background:'#d7ccc8', color:"black", width:"10rem"}}>SHOP NOW</Button>     
            </Box>
            <Box sx={{position:"relative", width:"30vw", m:"2rem"}}>
                <img className='imgone' src={hero1} alt="photobig" />
                <img className='imgtwo' src={hero2} alt="photolittle" />   
            </Box>
        </Box>

        {/*//! İkinci kisim product */}

        <Box sx={{background:"#f1f5f8" , p:"0.5rem",}}>
            <Typography variant="h4" sx={{mt:"2rem"}} align="center" >
                Featured Products
            </Typography>
            {productList?.slice(0,3).map((item,index)=> {
                return(<Card sx={{ maxWidth: 345 }} key={index}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={item?.image}
                        alt={item?.name}
                      />
                      <CardContent sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", mx:"10px"}}>
                        <Typography gutterBottom variant="body1" component="div">
                        {item?.name}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                        $ {item?.price}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                )})
            }
            <Button onClick={()=>navigate("/products")} variant="contained" sx={{background:'#d7ccc8', color:"black" ,width:"10rem", display:"block", mx:"auto", mb:"2rem", mt:"1rem"}}>ALL PRODUCTS</Button>  
        </Box>
        
        {/*//! Ücüncü kisim mission,... */}
        <Box sx={{background:"#eaded7", height:"25rem"}}>
            <Container sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",gap:"3rem"}}>
                <Typography variant="h4" m="3rem" color="#453227" fontWeight="700" >
                Custom Furniture Built Only For You
                </Typography>
                <Typography variant="body1" m="3rem" color="#453227" >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo in maiores vel ex? Error alias eius, quod saepe ut exercitationem?
                </Typography>
            </Container>

            <Container  sx={{display:"flex",flexDirection:"row",justifyContent:"center", gap:"2rem",}}>

             {services?.map((service)=>{
                const {id,icon,title,text} = service
                return (
                    <Card key={id} align="center" sx={{width:"15rem", background:"#c5a491",display:"flex", flexDirection:"column", padding:"1rem"}}>
                        <Avatar sx={{ width: 56, height: 56 , mt:"1rem", mx:"auto",background:"#EADED7",color:"#453227",fontSize:"2rem"}} >
                            {icon}
                        </Avatar>
                        <CardContent >
                            <Typography variant="h5" component="div" color="#453227" sx={{fontWeight:700, letterSpacing:1.6, fontFamily:"inherit", mb:2}} >
                                {title}
                            </Typography>
                            <Typography variant="body2" color="#453227">
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            })}
            </Container>

        </Box>

        {/*//! Dördüncü kisim send email */}

        <Box sx={{ p:"3rem", mt:"3rem", height:"1rem"}}>
            <Typography variant="h3" mt="10rem"  >
             Join our newsletter and get 20% off                
            </Typography>
            <Box sx={{mt:"2rem", display:"flex", gap:"12rem", flexDirection:"row"}}>
                <Typography variant="body1" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, debitis id! Maxime sunt aliquid earum! Non quidem quos alias similique ab reprehenderit, id perspiciatis recusandae animi error dolor iure dolorum.
                </Typography>
                <Box sx={{display:"flex", mb:"3rem",gap:"0.2rem"}}>
                    <TextField id="outlined-basic" label="Enter Email" sx={{width:"25rem"}} />
                    <Button variant="contained" sx={{background:'#d7ccc8', color:"black", width:"7rem", display:"block", mx:"auto"}}>Subscribe</Button>     
                </Box>
            </Box>

        </Box>

       </>
        
     
  
    )
  }
  
  export default Home;