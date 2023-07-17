"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import FooterMenu from "@/components/FooterMenu";
import ReButton from "@/components/ReButton";
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
    <Grid
      sx={{
        display: "grid",
        gridTemplateAreas: "overlap",
        gridTemplateRows: "1fr",
        gridTemplateColumns: "1fr",
        alignItems: "center",
        marginTop:{xs:"350px",sm:"100px",md:"160px"}}}
    >
      {/* FOOTER START */}
      <div style={{ dislay: "grid", gridArea: "center" }}>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#081D3A",
            color: "white",
            width: "100%",
            height: "100%",
            padding: "20px",
          }}
          direction="row"
        >
          <Grid
            container
            direction="row"
            sx={{
              marginTop:{xs:30,sm:30,md:30}}}
          >
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
              <Grid
                container
                direction="row"
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
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
              <Grid
                container
                direction="row"
                spacing={2}
                sx={{ display: "flex", justifyContent: "center" }}
              >
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
              sx={{
                display: { sm: "inline", xs: "inline", md: "none" },
                justifyContent: "center",
              }}
            >
              <FooterMenu />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            sx={{ display: "flex", justifyContent: "center" }}
            md={12}
          >
            <Grid item xs={7}>
              <p style={{ textAlign: "end" }}>
                @ 2023 REI Deal Analyzer. All Rights Reserved
              </p>
            </Grid>

            <Grid
              item
              sx={{
                color: "#5663DA",
                fontSize: "35px",
                display: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={5}
            >
              <BsFillArrowUpCircleFill onClick={handleClick} />
            </Grid>
          </Grid>
        </Grid>
      </div>

      {/* FOOTER END */}
      {/* CALLACTION START */}
      <Grid
        sx={{
          display: "grid",
          justifyContent: "center",
          gridArea: "overlap",
          bottom:{xs:"500px",sm:"300px",md:"280px"},
          position: "relative",
        }}
      >
        <Grid
          container
          sx={{
            backgroundColor: "#5663DA",
            borderRadius: "30px",
            textAlign: "center",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            width: "80vw",
          }}
        >
          <Grid container sx={{ display: "center", justifyContent: "center" }}>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "end",
                alignContent: "end",
                textAlign: "center",
              }}
            >
              <Typography sx={{ fontSize: {xs:"35px",sm:"35px",md:"42px" },fontFamily:"QanelasSoftBlack"}}>
                <b >
                Start analyzing <br /> investment properties like a pro.
              </b>
              </Typography>
              
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              position: "absolute",
              right: 200,
              display: { sm: "none", xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            <img src="./images/Rock.png" />
          </Grid>
          <Grid
            container
            direction="row"
            sx={{ justifyContent: "center", marginTop: "15px" }}
          >
            <Typography sx={{ fontSize: {xs:"14px",sm:"14px",md:"16px" },fontFamily:"QanelasSoftBlack" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem <br /> Ipsum has been the industry's standard
              dummy
            </Typography>
            <Grid
              container
              direction="row"
              sx={{ justifyContent: "center", marginTop: "15px" }}
            >
              <ReButton
                name={"Get Started For Free"}
                bgcolor={"white"}
                color={"#5663DA"}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* CALLACTION END */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      ></div>
    </Grid>
  );
}
