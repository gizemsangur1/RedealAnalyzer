import { Grid } from "@mui/material";
import React from "react";
import HeadingLine from "./HeadingLine";
import ReButton from "./ReButton";

export default function StepTwo() {
  return (
    <div>
      <Grid container sx={{backgroundColor:"#5663DA0A",margin:"2px"}} spacing={2}>
        <Grid item md={7}>
          <img src="./images/step2.png" />
        </Grid>
        <Grid item md={5}>
          <HeadingLine text={"Step 2"} />
          <b style={{ fontSize: "40px" }}>
            View detailed financial <br />
            analysis and projections.
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
          <Grid sx={{ marginTop: "30px" }}>
            <ReButton
              name={"Contact Us Now"}
              bgcolor={"#5663DA"}
              color={"white"}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
