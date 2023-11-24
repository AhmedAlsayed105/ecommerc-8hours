import {
  Box,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Close } from "@mui/icons-material";
import { useGetPokemonByNameQuery } from "../Redux/ProductApi";
import Loading from "../../Component/Loader/Loading";
export default function ProductFilter() {
  const matches = useMediaQuery("(max-width:850px)");
  const theme = useTheme();
  const handleAlignment = (event, newValue) => {
    // set data on click on value
    setDataApi(newValue)
  };
  // start popup product
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // End popup product
// start Redux
// http://localhost:1337/api/products?populate=*&filters[productCategory][$eq]=women
const AllProductApi = "products?populate=*"
const categoryWomenApi ="products?populate=*&filters[productCategory][$eq]=women"
const categoryManApi = "products?populate=*&filters[productCategory][$eq]=men" 

const [dataAPi,setDataApi] = useState(AllProductApi)
// @ts-ignore
const { data, error, isLoading } = useGetPokemonByNameQuery(dataAPi)
    // console.log(isLoading);

  //     if(data){
  //   // console.log(data);
  //   // console.log(data.data[0].attributes.productImag.data[0].attributes.url);
  // }
// End Redux
  return (
    isLoading ? (<Loading/>):
    (
      <Container sx={{ py: 9 }}>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box sx={{ display: matches ? "none" : "block" }}>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={dataAPi}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          sx={{
            ".Mui-selected": {
              color: "#e94560",
              border: "solid rgb(233,69,96,0.5) !important",
              background: "initial",
            },
          }}
        >
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="my-Button"
            value={AllProductApi}
            aria-label="left aligned"
          >
            All Products
          </ToggleButton>
          <ToggleButton
            className="my-Button"
            sx={{ mx: "16px !important", color: theme.palette.text.primary }}
            value={categoryManApi}
            aria-label="centered"
          >
            MEN category
          </ToggleButton>
          <ToggleButton
            sx={{ color: theme.palette.text.primary }}
            className="my-Button"
            value={categoryWomenApi}
            aria-label="right aligned"
          >
            Women category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {/* card  */}
      <Stack
        flexDirection={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
      >
        {data.data.map((item) => (
    // console.log(data.data[0].attributes.productImag.data[0].attributes.url);

            // console.log(item.attributes.productImag.data[0].attributes.url)
          <Card key={item.id} sx={{ mt: 6, maxWidth: 300, ":hover .MuiCardMedia-root": { scale: "1.1", rotate: "1deg", transition: "0.35s" } }} >
            <CardMedia
              sx={{
                height: 277,
                cursor: "pointer"
              }}
              // @ts-ignore
              image={`${item.attributes.productImag.data[0].attributes.url}`}
              title="green iguana"
              />
<Box sx={{background:theme.palette.
// @ts-ignore
bgCard.main}}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    // bgcolor:"red"
                  }}
                >
                  <Typography gutterBottom variant="h5" color={"#fff"} component="div">
                    {item.attributes.productTitle}
                  </Typography>
                  <Typography color={"#fff"} gutterBottom component="p">
                  ${item.attributes.productPrice}
                  </Typography>
                </Box>
                <Typography color={"#fff"} component="p">
                {item.attributes.productDescription}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Box>
                  <Button
                    onClick={handleClickOpen}
                    sx={{ textTransform: "capitalize",color:"#26c6da" }}
                    size="large"
                  >
                    <AddShoppingCartOutlinedIcon
                      sx={{ mr: 1 }}
                      fontSize="small"
                    />
                    add to cart
                  </Button>
                </Box>
                <Box>
                  <Rating precision={0.1} name="read-only" value={item.attributes.productRating} readOnly />
                </Box>
              </CardActions>
              
</Box >
          </Card>
        ))}
        {/* start popup Product */}
        <Dialog
          open={open}
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", ".MuiPaper-root": { maxWidth: {xs:"315px" ,sm: "800px !important" } } }}

        >
          <IconButton
            onClick={handleClose}
            sx={{ ":hover": { rotate: "180deg", transition: "0.3s ", color: "red" }, position: "absolute", right: 10, top: 0 }}
          >
            <Close />
          </IconButton>
          <Stack gap={"20px"} sx={{ mt: 4, p: 1, flexDirection: { xs: "column", sm: "row" }, overflow: "hidden" }}>
          <Box sx={{display:"flex"}} >
            
              <img width="300px" height="300px" src="/src/images/2.jpg" />
            
          </Box >
            <Box >
              <Typography sx={{ fontWeight: "bold" }} gutterBottom variant="h5" component="div">BLue JEANS</Typography>
              <Typography gutterBottom variant="h5" color="red" component="p">$13.99</Typography>
              <Typography sx={{ fontSize: "15px" }} gutterBottom variant="h5" component="p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, ex dicta. Quisquam sequi dolorum assumenda odit incidunt vitae beatae, praesentium sit.</Typography>
              <Stack gap={"20px"} flexDirection={"row"} sx={{mt:1}}>
                <img width={"100px"} src="/src/images/2.jpg" />
                <img width={"100px"} src="/src/images/2.jpg" />
              </Stack>
              <Button
                // onClick={handleClickOpen}
                sx={{ textTransform: "capitalize" ,mt:1}}
                size="large"
                variant="contained"
              >
                <AddShoppingCartOutlinedIcon
                  sx={{ mr: 1 }}
                  fontSize="small"

                />
                Bay Now
              </Button>
            </Box>
          </Stack>
        </Dialog>
        {/* End popup Product */}
      </Stack>
    </Container>
    )
  );
}
