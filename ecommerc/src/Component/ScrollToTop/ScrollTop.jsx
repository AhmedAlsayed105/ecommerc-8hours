import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

export default function ScrollTop() {

    const toTop = ()=>{
        window.scrollTo({top: 0, behavior:"smooth"})
    }

  return (
    // zoom خاصيه لجعل الزرار يختفي و useScrollTrigger بتقلو اظهر بعد قدين
    <Zoom in={useScrollTrigger({threshold: 100})} >
      <Box sx={{position:"fixed",bottom:25,right:10}}>
        <Fab onClick={toTop} size="small"  color="secondary" aria-label="add" >
            <KeyboardArrowUp fontSize="medium" /> 
        </Fab>
      </Box>
    </Zoom>
  );
}
