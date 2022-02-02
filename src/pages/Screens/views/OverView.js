import { Box, Fab, Grid, IconButton, Typography } from "@mui/material";
import React, { Component } from "react";
import { profileData } from "../../../assets/data/profileData";
import "./styles.css";

class OverView extends Component {
  render() {
    return (
      <Grid container sx={{ width: "100%" }} auto>
        {profileData.experienceOverview.map((data, index) => (
          <Grid item lg={3} xs={6} p={2}>
            <Box sx={{ display: "inline-flex" }}>
              <Fab
                variant="extended"
                sx={{
                  background: "inherit",
                  "&:hover": {
                    background: "none",
                    boxShadow: '0px 0px 5px #fbc107'
                  },
                }}
              >
                <Typography className="overview-text">{data.val}</Typography>
              </Fab>
              <Typography className="overview-follow-text">
                {data.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default OverView;
