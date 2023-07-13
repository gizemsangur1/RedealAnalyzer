import StepOne from "@/components/StepOne";
import StepThree from "@/components/StepThree";
import StepTwo from "@/components/StepTwo";
import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Steps() {
  return (
    <div>
      <Grid container direction="row" sx={{textAlign:"center",justifyContent:"center"}}>
        <Typography sx={{fontSize:"40px"}}>
          Accurate property analysis in just a few clicks:
        </Typography>
      </Grid>
      <Grid conrtainer direction="row">
        <StepOne/>
        <StepTwo/>
        <StepThree/>
      </Grid>
    </div>
  );
}
