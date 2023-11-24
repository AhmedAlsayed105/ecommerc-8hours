import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function SectionTwoHero() {
    const theme = useTheme()
  return (
    <Container sx={{ mt: 2 , bgcolor:theme.palette.mode === "dark" ? "#000" : "#fff"}}>
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        flexDirection={"row"}
        flexWrap={"wrap"}
        alignItems={"center"}
      >
        <AllBos
          Icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          titleTwo={"Start from $10"}
        />
        <AllBos
          Icon={<WorkspacePremiumOutlinedIcon />}
          title={"Fast Delivery"}
          titleTwo={"Start from $10"}
        />
        <AllBos
          Icon={<AccessAlarmOutlinedIcon />}
          title={"Fast Delivery"}
          titleTwo={"Start from $10"}
        />
        <AllBos
          Icon={<CreditScoreOutlinedIcon />}
          title={"Fast Delivery"}
          titleTwo={"Start from $10"}
        />
      </Stack>
    </Container>
  );
}

// eslint-disable-next-line react/prop-types
function AllBos({ Icon, title, titleTwo }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "250px",
        flexGrow: "1",
        py: 1.7,
        gap: 3,
        justifyContent: useMediaQuery('(min-width:600px)') ? "center" : "left"
      }}
    >
      {Icon}
      <Box>
        <Typography>{title}</Typography>
        <Typography>{titleTwo}</Typography>
      </Box>
    </Box>
  );
}
