import Testimonalcard from "@/components/Testimonalcard";
import { Grid } from "@mui/material";
import React from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
export default function Testimonal() {
 
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
                marginTop: {sm:0,md:"20px"},
              }}
            >
              <Grid
                item
                /* onClick={handleLeft} */
              >
                
                <IoIosArrowDropleft color="#000000" opacity="20%" size={60} attributeName="bg-blue" />
              </Grid>
              <Grid
                item
                /* onClick={handleRight}  */
              >
                <IoIosArrowDropright color="#000000" opacity="20%" size={60}/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
