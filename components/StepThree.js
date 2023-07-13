import { Grid } from "@mui/material";
import React from "react";
import HeadingLine from "./HeadingLine";
import ReButton from "./ReButton";

export default function StepThree() {
  return (
    <div>
      <Grid container>
        <Grid item md={5}>
          <HeadingLine text={"Step 1"} />
          <b style={{ fontSize: "40px" }}>
            Calculate your max allowable
            <br /> offers to sellers.
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
          <ReButton name={"Contact Us Now"} />
        </Grid>
        <Grid item md={7}>
          <img src="./step3.png" />
        </Grid>
      </Grid>
    </div>
  );
}
