import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { profileData } from "../../assets/data/profileData";
import Home from "../Home/Home";
import CarousalBanner from "./views/Banner";
import OverView from "./views/OverView";
import ProfileHighlights from "./views/ProfileHighlights";
import WorkTimeline from "./views/WorkTimeline";

class Experience extends Component {
  render() {
    return (
      <Home sx={{ background: "#1e1e28" }}>
        <Grid container>
          <Grid item xs={6}>
            <Card
              sx={{
                background:
                  "linear-gradient(180deg, rgba(30, 30, 40, 0.93) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%)",
                width: "100%",
                padding: 2,
                height: "95vh",
                overflow: "scroll",
              }}
            >
              <CardHeader
                className="w-100"
                title={
                  <Typography className="w-100 d-flex text-left font-weight-bold">
                    Career Timeline
                  </Typography>
                }
                subheader={
                  <Typography className="w-100 d-flex text-left font-weight-bold">
                    Showing timeline of my work life till date
                  </Typography>
                }
              />
              <WorkTimeline position="left" data={profileData.workTimeline} />
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                background:
                  "linear-gradient(180deg, rgba(30, 30, 40, 0.93) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%)",
                width: "100%",
                padding: 2,
                height: "95vh",
                overflow: "scroll",
              }}
            >
              <CardHeader
                className="w-100"
                title={
                  <Typography className="w-100 d-flex text-left font-weight-bold">
                    Education Timeline
                  </Typography>
                }
                subheader={
                  <Typography className="w-100 d-flex text-left font-weight-bold">
                    Showing timeline of my education and academic projects
                  </Typography>
                }
              />
              <CardContent className="w-100 m-auto">
                <WorkTimeline
                  position="right"
                  data={profileData.educationTimeline}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Home>
    );
  }
}

export default Experience;
