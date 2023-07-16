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
    <Grid container direction="row" sx={{margin:"45px",display:"flex",alignItems:"center"}}>
      <Grid container direction="row" sx={{display:"flex",justifyContent:"space-between"}}>
        <Grid container item sm={12} md={2}>
          <Grid item sm={3}><IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton></Grid>
          <Grid item sm={9} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}><img src="./images/logo.png" /></Grid>
        
        </Grid>
        <Grid item md={10} sx={{display: { sm: "none", md: "flex" },justifyContent:"flex-end",alignItems:"center" ,right:0}}>
          <Box sx={{ display: { xs:"none",sm: "none", md: "block" },justifyContent:"space-between",alignItems:"center" ,right:0}}>
            <Button sx={{ color: "black", m: 1 }}>How It Works</Button>
            <Button sx={{ color: "black", m: 1 }}>Features</Button>
            <Button sx={{ color: "black", m: 1 }}>Pricing</Button>
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
            display: { sm: "block", md: "none" },
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
