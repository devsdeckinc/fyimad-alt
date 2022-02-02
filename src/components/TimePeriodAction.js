import { Typography, Box } from "@mui/material";
import React, { Component } from "react";

export default class TimePeriodAction extends Component {
  render() {
    return (
      <Box
        sx={{
          fontSize: "10px",
          padding: "5px",
          border: "1px solid #1212125e",
          borderRadius: "15px",
          background: "#1212125e",
        }}
      >
        <Typography fontSize="inherit">{this.props.period || ""}</Typography>
      </Box>
    );
  }
}
