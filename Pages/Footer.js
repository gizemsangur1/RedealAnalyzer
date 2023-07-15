"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import ReButton from "@/components/ReButton";
export default function Footer() {
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "2fr",
        gridTemplateAreas: "overlap",
        justifyContent:"center"
      }}
    >
      <div
        style={{
          width: "100%",
          bottom: 0,
          backgroundColor: "#081D3A",
          paddingLeft: "24px",
          paddingRight: "24px",
          gridArea: "overlap",
          height:"500px",
          position:"relative",
          top:"270px"
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "#081D3A",
            color: "white",
          }}
        >
          <Grid container sx={{ margin: "55px", marginTop: "95px" }}>
            <Grid item xs={4}>
              <img src="./images/wlogo.png" />
              <p style={{ opacity: "80%", marginTop: 10 }}>
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop.
              </p>
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
            <Grid container xs={4}>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
            <Grid container xs={4}>
              <Grid item xs={6}>
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
              <Grid item xs={6}>
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
            direction="row"
            sx={{ justifyContent: "space-evenly", opacity: "80%", margin: 2 }}
          >
            <p>@ 2023 REI Deal Analyzer. All Rights Reserved</p>
            <Grid sx={{ color: "#5663DA", fontSize: "35px" }}>
              <BsFillArrowUpCircleFill onClick={handleClick} />
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          gridArea: "overlap",
          zIndex:999,
        }}
      >
        <Grid
          container
          sx={{
            position:"relative",
            left:"100px",
            backgroundColor: "#5663DA",
            borderRadius: "30px",
            textAlign: "center",
            color: "white",
            padding: 5,
            width: "80vw",
          }}
        >
          <Grid container direction="row" sx={{ justifyContent: "center" }}>
            <b style={{ fontSize: "42px" }}>
              Start analyzing <br /> investment properties like a pro.
            </b>

            <img
              src="./images/Rock.png"
              style={{ position: "absolute", right: 300 }}
            />
          </Grid>
          <Grid container direction="row" sx={{ justifyContent: "center" }}>
            <Typography sx={{ fontSize: "16px" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem <br /> Ipsum has been the industry's standard
              dummy
            </Typography>
            <Grid container direction="row" sx={{ justifyContent: "center" }}>
              <ReButton
                name={"Get Started For Free"}
                bgcolor={"white"}
                color={"#5663DA"}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
