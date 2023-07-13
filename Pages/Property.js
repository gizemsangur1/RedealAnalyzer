import ReButton from "@/components/ReButton";
import { Grid } from "@mui/material";
import React from "react";

export default function Property() {
  return (
    <Grid container dirction="row">
      <Grid item md={4} sm={12} >
        <Grid>
          <b style={{ fontSize: "45px" }}>
            We do our best <br /> facilities provide you <br />
          </b>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <Grid sx={{ marginTop: "25px" }}>
            <ReButton name={"Contact Us Now"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8} sm={12}>
        <Grid
          container
          direction="row"
          sx={{ justifyContent: "space-between", marginBottom: "40px",marginLeft:"40px" }}
        >
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid black",
              }}
            >
              A
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid black",
              }}
            >
              A
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid black",
              }}
            >
              A
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid black",
              }}
            >
              A
            </div>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          sx={{ justifyContent: "space-between", margin: "40px" }}
        >
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid black",
              }}
            >
              A
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid black",
              }}
            >
              A
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid black",
              }}
            >
              A
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid black",
              }}
            >
              A
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
