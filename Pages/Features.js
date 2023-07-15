import InDepth from "@/components/InDepth";
import PropertyTypes from "@/components/PropertyTypes";
import Prospectus from "@/components/Prospectus";
import QuickAnalysis from "@/components/QuickAnalysis";
import ReButton from "@/components/ReButton";
import { Grid } from "@mui/material";
import React from "react";

export default function Features() {
  return (
    <div style={{backgroundColor:"#5663DA0A" }}>
      <Grid container direction="row">
        <Grid item md={5}>
          <Grid container sx={{top:"25%",position:"relative"}}>
            <b style={{ fontSize: "40px",margin:"5px" }}>
              Explore REI Deal Analyzer <br />
              Main Features
            </b>
            <p style={{ fontSize: "17px",margin:"5px"  }}>
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </p>
            <Grid sx={{marginTop:"30px"}}>
              <ReButton name={"Try Deal Analyzer Now"} bgcolor={"#5663DA"} color={"white"}/>
            </Grid>
            
          </Grid>
        </Grid>
        <Grid item md={7}>
          <Grid container sx={{margin:"5px",justifyContent:"center"}}>
            <Grid item direction="column">
              <Grid item>
                <div
                  style={{
                    borderRadius: "8px",
                    width: "312px",
                    height: "246px",
                    border: "2px solid #E8E8E8",
                    textAlign: "center",
                    margin: "10px",
                  }}
                >
                  <Grid sx={{ position: "relative", top: "20%" }}>
                    <InDepth />
                    <b>In-depth Analysis</b>
                    <p>
                      Our advanced software analyzes market data, property
                      details, and financial metrics to provide you...
                    </p>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div
                  style={{
                    borderRadius: "8px",
                    width: "312px",
                    height: "246px",
                    border: "2px solid #E8E8E8",
                    textAlign: "center",
                    margin: "10px",
                  }}
                >
                  <Grid sx={{ position: "relative", top: "20%" }}>
                    <QuickAnalysis />
                    <b>Quick Analysis</b>
                    <p>
                      Our Quick Chips tool is a powerful addition to your real
                      estate inves- tment arsenal, providing a fast and...
                    </p>
                  </Grid>
                </div>
              </Grid>
            </Grid>
            <Grid item direction="column" >
              <Grid item>
                <div
                  style={{
                    borderRadius: "8px",
                    width: "312px",
                    height: "246px",
                    border: "2px solid #E8E8E8",
                    textAlign: "center",
                    margin: "10px",
                  }}
                >
                  <Grid sx={{ position: "relative", top: "20%" }}>
                    <PropertyTypes />
                    <b>Property Types</b>
                    <p>
                      REI Deal Analyzer is a versatile tool that can analyze a
                      wide range of property types including single...
                    </p>
                  </Grid>
                </div>
              </Grid>
              <Grid item>
                <div
                  style={{
                    borderRadius: "8px",
                    width: "312px",
                    height: "246px",
                    border: "2px solid #E8E8E8",
                    textAlign: "center",
                    margin: "10px",
                  }}
                >
                  <Grid sx={{ position: "relative", top: "20%" }}>
                    <Prospectus />
                    <b>Prospectus Generator</b>
                    <p>
                      Introducing the REI Prospectus Generator, the newest
                      addition to our real estate investment toolkit....
                    </p>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
