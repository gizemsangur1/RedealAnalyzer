"use client";
import HeadingLine from "@/components/HeadingLine";
import ReButton from "@/components/ReButton";
import Vectorsvg from "@/components/Vectorsvg";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

export default function BannerPage() {
  return (
    <Grid container direction="row">
      <Grid item md={4} sm={12}>
        <Box sx={{ top: "60px", position: "relative" }}>
          <HeadingLine text={"REI Deal Analyzer"} />
          <b style={{ fontSize: "40px" }}>
            Maximize your <br /> real estate ROI with <br /> the precision of
          </b>
          <br />
          <b style={{ fontSize: "40px", color: "#5663da" }}>
            REI Deal Analyzer.
          </b>
          <p style={{ fontSize: "17px", marginTop: "10px" }}>
            Lorem Ipsum is simply dummy text of the printing and type setting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Grid container sx={{ marginTop: "25px" }}>
            <ReButton name={"Try Deal Analyzer Now"} />
            <Grid sx={{marginTop:"40px",marginLeft:"25px"}}>
              <Vectorsvg />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={8} sm={12}>
        <img src="./banner.png" />
      </Grid>
    </Grid>
  );
}
