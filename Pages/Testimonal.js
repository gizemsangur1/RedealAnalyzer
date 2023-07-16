import Testimonalcard from "@/components/Testimonalcard";
import { Grid } from "@mui/material";
import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
export default function Testimonal() {
  /* const hadnleRight=()=>{

  } */
  return (
    <div>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid item md={7} sx={{ display: { xs: "none", sm: "block" }}}>
          <img
            src="./images/testimonal.png"
            style={{ bottom: 0, position: "relative" }}
          />
        </Grid>
        <Grid item md={5} sm={12}>
          <b style={{ fontSize: "40px" }}>What Says Our Customer</b>
          <Grid container>
            <Grid container direction="row">
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Testimonalcard />
                </Grid>
                <Grid item>
                  <Testimonalcard />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <Grid
                item
                sx={{
                  fontSize:"60px",
                }}
                /* onClick={handleLeft} */
              >
                <IoIosArrowDropleft color="#000000" opacity="20%"/>
              </Grid>
              <Grid
                item
                sx={{
                  fontSize:"60px",
                }}
                /* onClick={handleRight}  */
              >
                <IoIosArrowDropright color="#000000" opacity="20%" enableBackground="#5663DA" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
