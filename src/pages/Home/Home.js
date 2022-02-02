import { Box, Card, Container, Drawer, Grid, Paper } from "@mui/material";
import React, { Component } from "react";
import Routing from "../../Routing/Routing";
import DrawerBox from "../DrawerBox/DrawerBox";
import Sidebar from "../Sidebar/Sidebar";

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
          height: "auto",
          display: "flex",
          bgcolor: "background.secondary",
        }}
      >
        <Sidebar {...this.props} />
        <Box
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor:
              "linear-gradient(180deg, rgba(30, 30, 40, 0.93) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%)",
            color: "text.primary",
            borderRadius: 0,
            padding: "15px",
            postion: "relative",
            height: "100vh",
          }}
        >
          {this.props.children}

        </Box>
        <DrawerBox {...this.props} />
      </Paper>
    );
  }
}

export default Home;
