import ReButton from "@/components/ReButton";
import { Grid} from "@mui/material";
import React from "react";

export default function Testimonal() {
  return (
    <div>
      <Grid container direction="row" sx={{justifyContent:"center"}}>
        <Grid item xs={7}>
          <img src="./images/testimonal.png"  style={{bottom:0,position:'relative'}} />
        </Grid>
        <Grid item xs={5}>
          <b style={{ fontSize: "40px" }}>What Says Our Customer</b>
          <Grid container >
            <Grid item direction="row">
              <Grid item direction="column">
                <Grid item>
                  <ReButton name={"Contact Us Now"} bgcolor={"#5663DA"} color={"white"} />
                </Grid>
                <Grid item>
                  <ReButton name={"Contact Us Now"} bgcolor={"#5663DA"} color={"white"} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item direction="row">
              <ReButton name={"Contact Us Now"} bgcolor={"#5663DA"} color={"white"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
