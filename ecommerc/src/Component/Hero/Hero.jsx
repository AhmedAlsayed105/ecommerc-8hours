import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './slider.css'
// import required modules
import { Pagination } from 'swiper/modules';
import SectionTwoHero from "./sectionTwoHero";
export default function Hero() {
  const theme = useTheme()
  return (
    <Container sx={{ mt:3}}>
     <Box sx={{pt:1,display: "flex", alignItems: "center" , gap:2}}>
     <Swiper
      loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
        [
          {
            text:"MEN",
            imgUrl:"src/images/banner-15.jpg"
          },
          {
            text:"WOMEN",
            imgUrl:"src/images/banner-25.jpg"
          },
        ].map((item) => (
          <SwiperSlide key={item.text} className="parent-slider">
          <img  src={item.imgUrl} />
          <Box
            
            sx={{
              [theme.breakpoints.up('sm')]: {
                position:"absolute",left:"10%",textAlign:"left"                
              },
              [theme.breakpoints.down('sm')]: {
                  pt:4,
                  pb:6,
              },
            }}
          >
            <Typography 
            sx={{[theme.breakpoints.down('sm')]: {
              fontSize:'18px',
            },
              color:"#222"}}
              variant="h5">
              LIFESTYLE COLLECTION
            </Typography>
            <Typography sx={{
              [theme.breakpoints.down('sm')]: {
                fontSize:'22px',
              },
              color:"#222",my:1
              }}  variant="h3" fontWeight={400} >
              {item.text}
              </Typography>
              <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography sx={{
                      [theme.breakpoints.down('sm')]: {
                        fontSize:'18px',
                      },
                    }} color={"#333"} mr={1} variant="h5">
                      SALE UP TO
                    </Typography>
                    <Typography 
                     sx={{
                      [theme.breakpoints.down('sm')]: {
                        fontSize:'22px',
                      },
                    }} color={"#D23F57"} variant="h4">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{
                      color: "#000",
                      fontWeight: 300,
                      my: 1,
                    }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    shop now
                  </Button>
                </Box>
        </SwiperSlide>
        ))

      }
       
      </Swiper>
      {/* Box Two */}
      <Box sx={{ mt:1, display: { xs: "none", md: "block" },minWidth:"26.7%"}}>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="src\images\banner-17.jpg" />
          <Stack sx={{ position: "absolute", top: "50%", left: 31, transform: "translateY(-50%)" }}>
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>

        </Box>
        <Box sx={{ position: "relative" }}>
          <img width={"100%"} src="src\images\banner-16.jpg" />
          <Stack sx={{ position: "absolute", top: "50%", left: 31, transform: "translateY(-50%)" }}>
            <Typography
              variant="caption"
              sx={{
                color: "#2B3445",
                fontSize: "18px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
                lineHeight: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2B3445",
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",

                "&:hover": {
                  color: "#D23F57",
                },
              }}
              href="#"
              underline="none"
            >
              shop now
              <ArrowForwardIcon sx={{ fontSize: "13px" }} />
            </Link>
          </Stack>
        </Box>
      </Box>
     </Box>
      {/* SectionTwoHero */}
      <SectionTwoHero/>
    </Container>
  )
}
