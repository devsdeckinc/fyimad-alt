import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import React, { Component } from "react";
import { profileData } from "../../assets/data/profileData";
import Home from "../Home/Home";
import CarousalBanner from "./views/Banner";
import OverView from "./views/OverView";
import ProfileHighlights from "./views/ProfileHighlights";
import ProjectBox from "./views/ProjectBox";
import WorkTimeline from "./views/WorkTimeline";

class Projects extends Component {
  render() {
    return (
      <Home sx={{ background: "#1e1e28" }}>
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
              <Typography
                variant="h4"
                component="h4"
                color="secondary"
                className="w-100 d-flex text-left font-weight-bold text-uppercase"
              >
                Projects
              </Typography>
            }
            subheader={
              <Typography className="text-secondary w-100 d-flex text-left font-weight-bold">
                Professional and Out of Interest products and app
              </Typography>
            }
          />
          <CardContent>
            <ProjectBox position="left" data={profileData.projects} />
          </CardContent>
        </Card>
      </Home>
    );
  }
}

export default Projects;
