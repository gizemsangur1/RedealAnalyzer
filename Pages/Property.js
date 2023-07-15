import ReButton from "@/components/ReButton";
import { Grid } from "@mui/material";
import React from "react";
import BusinessIcon from "@mui/icons-material/Business";
import Apartment from "@/components/Apartment";
import OfficeBuilding from "@/components/OfficeBuilding";
import Duplex from "@/components/Duplex";
import StripMall from "@/components/StripMall";
import Industrial from "@/components/Industrial";
import SingleFHouse from "@/components/SingleFHouse";
import Trailerpark from "@/components/Trailerpark";
import Vacation from "@/components/Vacation";
export default function Property() {
  return (
    <Grid container dirction="row">
      <Grid item md={4} sm={12}>
        <Grid>
          <b style={{ fontSize: "45px" }}>
            We do our best <br /> facilities provide you <br />
          </b>
          <p style={{ fontSize: "18px", marginTop: "10px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <Grid sx={{ marginTop: "25px" }}>
            <ReButton name={"Contact Us Now"} bgcolor={"#5663DA"} color={"white"}/>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={8} sm={12}>
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "space-between",
            marginBottom: "40px",
            marginLeft: "40px",
          }}
        >
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid #E8E8E8",
                fontSize: "18px",
                textAlign: "center", 
              }}
            >
              <Grid sx={{position:"relative",top:"20%"}}>
                <Apartment/>
                <p>Apartment</p>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid #E8E8E8",
                backgroundColor:"#46ACFF",
                textAlign: "center", 
                color:"white"
              }}
            >
               <Grid sx={{position:"relative",top:"20%"}}>
                <OfficeBuilding/>
                <p>Office Building</p>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid #E8E8E8",
                textAlign: "center", 
              }}
            >
              <Grid sx={{position:"relative",top:"20%"}}>
                <Duplex/>
                <p>Duplex</p>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid #E8E8E8",
                textAlign: "center",
              }}
            >
               <Grid sx={{position:"relative",top:"20%"}}>
                <StripMall/>
                <p>StripMall</p>
              </Grid>
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
                border: "2px solid #E8E8E8",
                textAlign: "center",
              }}
            >
              <Grid sx={{position:"relative",top:"20%"}}>
                <Industrial/>
                <p>Industrial</p>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid #E8E8E8",
                textAlign: "center",
              }}
            >
                <Grid sx={{position:"relative",top:"20%"}}>
                <SingleFHouse/>
                <p>Single Family House</p>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid #E8E8E8",
                textAlign: "center",
              }}
            >
              <Grid sx={{position:"relative",top:"20%"}}>
                <Trailerpark/>
                <p>Trailer Park</p>
              </Grid>
            </div>
          </Grid>
          <Grid item>
            <div
              style={{
                borderRadius: "8px",
                width: "193px",
                height: "173px",
                border: "2px solid #E8E8E8",
                textAlign: "center",
              }}
            >
              <Grid sx={{position:"relative",top:"20%"}}>
                <Vacation/>
                <p>Vacation Rental</p>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
