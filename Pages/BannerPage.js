"use client";
import HeadingLine from "@/components/HeadingLine";
import MenuBar from "@/components/MenuBar";
import ReButton from "@/components/ReButton";
import Vectorsvg from "@/components/Vectorsvg";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";

export default function BannerPage() {
  return (
    <Grid>
      <Grid container direction="row" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
         <MenuBar/>
      </Grid>
      <Grid container direction="row" sx={{backgroundColor:"#5663DA0A ",display:"flex",justifyContent:"center",alignItems:"center"}} spacing={2}>
      
      <Grid item md={4} sm={12} >
        <Box sx={{ top: "30px", position: "relative" }}>
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
          <Grid container sx={{ marginTop: "15px" }}>
            <Grid item md={7} sm={12}>
              <ReButton name={"Try Deal Analyzer Now"} bgcolor={"#5663DA"} color={"white"}/>            
            </Grid>
            <Grid item md={5} sx={{marginTop:"25px", display: { sm: "none",xs:"none", md: "inline" }}}>
              <Vectorsvg />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item md={8} sm={12} sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <img src="./images/banner.png" />
      </Grid>
    </Grid>
    </Grid>
    
  );
}
