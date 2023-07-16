import { Grid } from "@mui/material";
import React from "react";
import HeadingLine from "./HeadingLine";
import ReButton from "./ReButton";

export default function StepOne() {
  return (
    <div>
      <Grid container spacing={2} >
        <Grid item md={5} sx={{ display: { sm: "none",xs:"none", md: "inline" }}}>
          <HeadingLine text={"Step 1"} />
          <b style={{ fontSize: "40px" }}>
            Import dozens of property
            <br /> data points.
          </b>

          <p style={{ fontSize: "17px", marginTop: "10px" }}>
            Quickly search for properties and import their description, list
            price, value & rent estimates, property taxes, photos and more. Or
            use our step-by-step wizard to enter the data manually.
          </p>
          <p style={{ fontSize: "17px", marginTop: "10px" }}>
            Quickly search for properties and import their description, list
            price, value & rent estimates, property taxes, photos and more.
          </p>
          <Grid sx={{marginTop:"30px"}}>
            <ReButton name={"Contact Us Now"} bgcolor={"#5663DA"} color={"white"} />
          </Grid>
          
        </Grid>
        <Grid item md={7} sx={{ display: { sm: "none",xs:"none", md: "inline" }}}>
          <img src="./images/step1.png" />
        </Grid>


        <Grid item md={7} sx={{ display: { sm: "inline",xs:"inline", md: "none" }}}> 
          <img src="./images/step1.png" />
        </Grid>
        <Grid item md={5}  sx={{ display: { sm: "inline",xs:"inline", md: "none" }}}>
            <HeadingLine text={"Step 1"} />
          <b style={{ fontSize: "40px" }}>
            Import dozens of property
            <br /> data points.
          </b>

          <p style={{ fontSize: "17px", marginTop: "10px" }}>
            Quickly search for properties and import their description, list
            price, value & rent estimates, property taxes, photos and more. Or
            use our step-by-step wizard to enter the data manually.
          </p>
          <p style={{ fontSize: "17px", marginTop: "10px" }}>
            Quickly search for properties and import their description, list
            price, value & rent estimates, property taxes, photos and more.
          </p>
          <Grid sx={{marginTop:"30px"}}>
            <ReButton name={"Contact Us Now"} bgcolor={"#5663DA"} color={"white"} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
