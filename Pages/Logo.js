import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Logo() {
  return (
    <div style={{width:"100%",marginBottom:"45px",marginTop:"45px"}}>
      <Grid container direction="row" sx={{justifyContent:"center",marginBottom:"45px"}}>
        <b style={{ fontSize: "26px",whiteSpace:"break-spaces" }}>
          We Have </b>
        <b style={{ fontSize: "26px",whiteSpace:"break-spaces",color:"#5663da" }}>20+ </b>
        <b style={{ fontSize: "26px" }}>Satisfied Clients</b>
      </Grid>
      <Grid container direction="row" sx={{justifyContent:"space-evenly"}}>
        <Grid item>
          <img src="./logos/Group9.png" />
        </Grid>
        <Grid item>
          <img src="./logos/Vector.png" />
        </Grid>
        <Grid item>
          <img src="./logos/Group6.png" />
        </Grid>
        <Grid item>
          <img src="./logos/Group.png" />
        </Grid>
        <Grid item>
          <img src="./logos/Group17.png" />
        </Grid>
        <Grid item>
          <img src="./logos/Group5.png" />
        </Grid>
        <Grid item>
          <img src="./logos/Group7.png" />
        </Grid>
      </Grid>
    </div>
  );
}
