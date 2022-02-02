import { Box, Card, Typography } from "@mui/material";
import React, { Component } from "react";
import LinearProgressLoading from "../../../components/LinearProgessLoading";

export default class SplashScreen extends Component {
  render() {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ background: "#1e1e28" }}
      >
        <Card
          className="shadow-none m-auto p-5 text-center"
          sx={{ width: 400, background: "#1e1e28" }}
        >
          <Typography sx={{ fontSize: "36px", fontWeight: 900 }}>
            FyiMad
          </Typography>
          <LinearProgressLoading />
        </Card>
      </Box>
    );
  }
}
