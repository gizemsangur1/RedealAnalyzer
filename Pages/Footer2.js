"use client";
import React from "react";
import { Grid } from "@mui/material";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import FooterMenu from "@/components/FooterMenu";
export default function Footer2() {
  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
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
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#081D3A",
          color: "white",
          width: "100%",
          height: "100%",
        }}
        direction="row"
      >
        <Grid container direction="row">
          <Grid container item md={4} sm={12}>
            <Grid container direction="row">
              <img src="./images/wlogo.png" />
              <p style={{ opacity: "80%", marginTop: 10 }}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop.
              </p>
            </Grid>
            <Grid container direction="row" sx={{ marginTop: 2 }}>
              <Grid item sx={{ fontSize: "35px", margin: 2 }}>
                <BsFacebook />
              </Grid>
              <Grid item sx={{ fontSize: "35px", margin: 2 }}>
                <AiFillTwitterCircle />
              </Grid>
              <Grid item sx={{ fontSize: "35px", margin: 2 }}>
                <AiFillLinkedin />
              </Grid>
              <Grid item sx={{ fontSize: "35px", margin: 2 }}>
                <AiFillInstagram />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={4}
            sx={{ display: { sm: "none", xs: "none", md: "flex" } }}
            direction="row"
          >
            <Grid container direction="row" spacing={2} sx={{display:"flex",justifyContent:"center"}}>
              <Grid item>
                <p>Menu</p>
                <Grid sx={{ opacity: "80%" }}>
                  {link1.map((link) => {
                    return (
                      <div style={{ marginTop: 12 }}>
                        <a href="">{link}</a>
                        <br />
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item>
                <p>Company</p>
                <Grid sx={{ opacity: "80%" }}>
                  {link2.map((link) => {
                    return (
                      <div style={{ marginTop: 12 }}>
                        <a href="">{link}</a>
                        <br />
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            md={4}
            sm={12}
            sx={{ display: { sm: "none", xs: "none", md: "inline" } }}
            direction="row"
          >
            <Grid container direction="row" spacing={2} sx={{display:"flex",justifyContent:"center"}}>
              <Grid item md={6}>
                <p>Use Cases</p>
                <Grid sx={{ opacity: "80%" }}>
                  {link3.map((link) => {
                    return (
                      <div style={{ marginTop: 12 }}>
                        <a href="">{link}</a>
                        <br />
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item md={6}>
                <p>Resources</p>
                <Grid sx={{ opacity: "80%" }}>
                  {link4.map((link) => {
                    return (
                      <div style={{ marginTop: 12 }}>
                        <a href="">{link}</a>
                        <br />
                      </div>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            sm={12}
            sx={{ display: { sm: "inline", xs: "inline", md: "none" } }}
          >
            <FooterMenu/>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          sx={{ display: "flex", justifyContent: "center" }}
          md={12}
        >
          <p>@ 2023 REI Deal Analyzer. All Rights Reserved</p>
          <Grid sx={{ color: "#5663DA", fontSize: "35px" }}>
            <BsFillArrowUpCircleFill onClick={handleClick} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
