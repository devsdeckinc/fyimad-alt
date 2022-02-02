import { Box, Card, CardHeader, Drawer, Grid, Paper } from "@mui/material";
import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper
        className="p-3"
        sx={{
          bgcolor: "background.secondary",
          height: "100vh",
          margin: "auto",
        }}
      >
        <Card elevation={0} sx={{ background: "inherit" }}>
          <CardHeader
            title={"Welcome to Fyimad"}
            subheader={"A Blogging Website in Under Construction"}
          />
          <a target="_blank" href="https://samraj.fyimad.com">
            view portfolio
          </a>
        </Card>
      </Paper>
    );
  }
}

export default Home;
