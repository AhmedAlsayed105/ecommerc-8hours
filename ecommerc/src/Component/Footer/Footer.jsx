
import { Box, Button, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
    sx={{
      bgcolor: "#2B3445",
      py: 1.3,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    }}
  >
    <Typography
      justifyContent={"center"}
      display={"flex"}
      alignItems={"center"}
      color={"HighlightText"}
      variant="h6"
      sx={{fontSize: 18}}
    >
       Developer by
      <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
          href='https://ahmedalsayed.netlify.app/'
        >
          Ahmed Alsayed
        </Button>
      ©2023
    </Typography>
  </Box>
  )
}

 
