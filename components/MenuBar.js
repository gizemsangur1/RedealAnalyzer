"use client";
import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { Grid } from "@mui/material";
const drawerWidth = 240;
const navItems = [
  "Home",
  "How It Works",
  "Features",
  "Pricing",
  "Login",
  "Get Started Free",
];
export default function MenuBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Grid container direction="row" sx={{height:"80px"}}>
      <Grid container direction="row" sx={{display:"flex",justifyContent:"space-between"}}>
        <Grid item xs={12} sm={2}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
            <img src="./images/logo.png" />
          
        </Grid>
        <Grid item sm={10} sx={{display: { xs: "none", sm: "flex" },justifyContent:"flex-end",alignItems:"center" ,right:0}}>
          <Box sx={{ display: { xs: "none", sm: "block" },justifyContent:"space-between",alignItems:"center" ,right:0}}>
            <Button sx={{ color: "black", m: 2 }}>How It Works</Button>
            <Button sx={{ color: "black", m: 2 }}>Features</Button>
            <Button sx={{ color: "black", m: 2 }}>Pricing</Button>
            <span style={{ margin: "10px", padding: "10px" }}>
              <LoginIcon sx={{ color: "#5663DA" }} />
              <Button sx={{ color: "black" }}>Login</Button>
            </span>

            <button
              style={{
                color: "white",
                backgroundColor: "#5663da",
                borderRadius: "35px",
                width: "195px",
                height: "50px",
              }}
            >
              Get Started Free
            </button>
          </Box>
        </Grid>
      </Grid>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Grid>
  );
}
