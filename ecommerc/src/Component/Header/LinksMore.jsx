import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";


// eslint-disable-next-line react/prop-types
export default function LinksMore({title}) {
    return (
<Box sx={{
display: "flex", alignItems: "center", position: "relative", cursor: "pointer",
":hover .show-when-hover": { display: "block" }
}}>
<Typography variant="body1" >
    {title}
</Typography>
<ExpandMore sx={{ fontSize: "16px", ml: 1 }} />
<Box className="show-when-hover" sx={{
    position: "absolute", top: "100%", minWidth: "170px", left: "50%", zIndex:"9999", transform: "translateX(-50%)", transition: "1.5s", display: "none"
}}>
    <Paper sx={{  position:"absolute", }}>
        <nav aria-label="secondary mailbox folders">
            <List>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                display: "flex",
                                p: 0,
                                px: 1.5,
                            }}
                        >
                            <ListItemText
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: "15px",
                                        fontWeight: 300,
                                    },
                                }}
                                primary="Dashboard"
                            />
                            <Box flexGrow={1} />
                        </ListItemButton>
                    </ListItem>
                    {/* start Main Product Icon */}
                    <ListItem disablePadding sx={{
                        position: "relative",
                        ":hover .sub-link": { display: "block" }
                    }}>
                        <ListItemButton
                            sx={{
                                display: "flex",
                                p: 0,
                                px: 1.5,
                            }}
                        >
                            <ListItemText
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: "15px",
                                        fontWeight: 300,
                                    },
                                }}
                                primary="Product"
                            />
                            <Box flexGrow={1} />
                            <KeyboardArrowRightOutlined fontSize="small" />
                        </ListItemButton>
                        {/* start hover show box */}
                        <Box
                            className="sub-link"
                            sx={{
                                display: "none",
                                position: "absolute",
                                top: 0,
                                left: "100%",
                            }}
                        >
                            <Paper sx={{ ml: 1, minWidth: 150 }}>
                                <nav aria-label="secondary mailbox folders">
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    display: "flex",
                                                    p: 0,
                                                    px: 1.5,
                                                }}
                                            >
                                                <ListItemText
                                                    sx={{
                                                        "& .MuiTypography-root": {
                                                            fontSize: "15px",
                                                            fontWeight: 300,
                                                        },
                                                    }}
                                                    primary="Add Product"
                                                />
                                                <Box flexGrow={1} />
                                            </ListItemButton>
                                        </ListItem>

                                        <ListItem disablePadding>
                                            <ListItemButton
                                                sx={{
                                                    display: "flex",
                                                    p: 0,
                                                    px: 1.5,
                                                }}
                                            >
                                                <ListItemText
                                                    sx={{
                                                        "& .MuiTypography-root": {
                                                            fontSize: "15px",
                                                            fontWeight: 300,
                                                        },
                                                    }}
                                                    primary="Edit Product"
                                                />
                                                <Box flexGrow={1} />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                            </Paper>
                        </Box>
                    </ListItem>
                    {/* End hover show box */}
                    {/* End Main Product Icon */}
                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                display: "flex",
                                p: 0,
                                px: 1.5,
                            }}
                        >
                            <ListItemText
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: "15px",
                                        fontWeight: 300,
                                    },
                                }}
                                primary="orders"
                            />
                            <Box flexGrow={1} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton
                            sx={{
                                display: "flex",
                                p: 0,
                                px: 1.5,
                            }}
                        >
                            <ListItemText
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: "15px",
                                        fontWeight: 300,
                                    },
                                }}
                                primary="Profile"
                            />
                            <Box flexGrow={1} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </List>
        </nav>
    </Paper>
</Box>
</Box >
    )
}
