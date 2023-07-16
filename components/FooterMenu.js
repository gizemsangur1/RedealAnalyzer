import React from "react";
import { Grid,Typography } from "@mui/material";
export default function FooterMenu() {
  const link1 = [
    "Features",
    "Plans & Pricing",
    "Product Updates",
    "How It Works",
    "Customers Review",
  ];
  const link2 = [
    "About Us",
    "Contact Us",
    "Press Kit",
    "Privacy Policy",
    "Help",
  ];
  const link3 = [
    "Rental Property Analysis",
    "BRRRR Analysis",
    "Fix & Flip Analysis",
    "Property Wholesaling",
    "Commercial Analysis",
  ];
  const link4 = [
    "Help Center",
    "Affiliate Program",
    "Deal Analyzer Blog",
    "Free Resources",
    "Terms of Use",
  ];
  return (
    <div>
      <Grid container>
        <Grid>
            <Typography>MENU</Typography>
        </Grid>
        <Grid></Grid>
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
    </div>
  );
}
