import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export default function Testimonalcard() {
  const result = [];

  for (let i = 0; i <= 5; i++) {
    <Grid item>
      <AiFillStar />
    </Grid>;

    result.push();
  }
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Card
        sx={{
          padding: "35px",
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Grid container direction="row">
          <Grid container sx={{ color: "#FFB200" }} direction="row">
            <Grid item>
              <AiFillStar />
            </Grid>
            <Grid item>
              <AiFillStar />
            </Grid>
            <Grid item>
              <AiFillStar />
            </Grid>
            <Grid item>
              <AiFillStar />
            </Grid>
            <Grid item>
              <AiFillStar />
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Box>
              <Typography>
                “ There are many variations of passages of a Lorem Ipsum
                available, but the majority is for have suffered alteration.
              </Typography>
            </Box>
          </Grid>
          <Grid container direction="row">
            <Box
              sx={{
                justifyContent: "flex-start",
                alignItems: "center",
                textALign: "center",
                display: "flex",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar
                    src="./images/avatar.png"
                    sx={{ width: "56px", height: "56px" }}
                  ></Avatar>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <b style={{ fontSize: "24px" }}>Sabo Masties</b>
                  </Grid>
                  <Grid container direction="row">
                    <Typography style={{ color: "#5663DA", fontSIze: "16px" }}>
                      From Amazon
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
