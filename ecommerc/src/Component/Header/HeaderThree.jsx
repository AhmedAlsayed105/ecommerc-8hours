import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import {
  Box,
  Container,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
  Close,
} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import useMediaQuery from '@mui/material/useMediaQuery';
import LinksMore from "./LinksMore";

export default function HeaderThree() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{
              width: "222px",
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              color: theme.palette.text.secondary,
            }}
          >
            <WindowIcon />
            <Typography
              sx={{
                padding: "0",
                textTransform: "capitalize",
                mx: 1,
              }}
            >
              categories
            </Typography>
            <Box flexGrow={1} />
            <KeyboardArrowRightOutlinedIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ ".MuiPaper-root": { width: 220 } }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <ElectricBikeOutlined fontSize="small" />
              </ListItemIcon>

              <ListItemText>Bikes</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LaptopChromebookOutlined fontSize="small" />
              </ListItemIcon>

              <ListItemText>Electronics</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <MenuBookOutlined fontSize="small" />
              </ListItemIcon>

              <ListItemText>Books</ListItemText>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <SportsEsportsOutlined fontSize="small" />
              </ListItemIcon>

              <ListItemText>Games</ListItemText>
            </MenuItem>
          </Menu>
        </div>
        {/* start Links media Query small   PageLinksMore*/}
        {
          useMediaQuery('(min-width:1001px)') && (
            <>
            <LinksMore title={"Home"}/>
            <LinksMore title={"Mega Menu"}/>
            <LinksMore title={"Full Screen Menu"}/>
            <LinksMore title={"Pages"}/>
            <LinksMore title={"User Account"}/>
            <LinksMore title={"Vendor Account"}/>
            </>
          )
        }
        {/* End Links media Query small   PageLinksMore*/}
            {useMediaQuery('(max-width:1000px)') && (

        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
            )}
        <Drawer 
          anchor={"top"}
          open={state["top"]}
          onClose={toggleDrawer("top", false)}
          sx={{
            ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": {
              height: "100%",
            },
          }}
          >
          <Box
            sx={{
              minWidth: "330px",
              mx: "auto",
              mt: 6,
              pt: 10,
              position: "relative",
            }}
          >
            <IconButton
              // @ts-ignore
              onClick={() => setState(false)}
              sx={{":hover":{rotate:"180deg",transition:"0.3s ",color:"red"}, position: "absolute", right: 10, top: 0 }}
            >
              <Close />
            </IconButton>
            {/* Accirdion */}
            {[
              { mainLink: "Home", links: ["Link 1", "Link 2", "Link 3"] },
              {
                mainLink: "Mega menu",
                links: ["Link 1", "Link 2", "Link 3"],
              },
              {
                mainLink: "full screen menu",
                links: ["Link 1", "Link 2", "Link 3"],
              },
              { mainLink: "pages", links: ["Link 1", "Link 2", "Link 3"] },
              {
                mainLink: "user account",
                links: ["Link 1", "Link 2", "Link 3"],
              },
              {
                mainLink: "vendor account",
                links: ["Link 1", "Link 2", "Link 3"],
              },
            ].map((item) => (
              <Accordion
                key={item.mainLink}
                sx={{ bgcolor: "initial" }}
                elevation={0}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* start list on accirdion */}
                  {item.links.map((link) => (
                    <List key={link} sx={{ py: 0, my: 0}}>
                      <ListItem sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  ))}
                  {/* End list on accirdion */}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Drawer>
      </Container>
    </>
  );
}
