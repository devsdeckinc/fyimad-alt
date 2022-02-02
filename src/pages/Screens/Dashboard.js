import { Box, Card, CardContent } from "@mui/material";
import React, { Component } from "react";
import Home from "../Home/Home";
import SplashScreen from "./SplashScreen/SplashScreen";
import CarousalBanner from "./views/Banner";
import OverView from "./views/OverView";
import ProfileHighlights from "./views/ProfileHighlights";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      splashScreen: true,
    };
  }
  componentDidMount() {
    this.closeSplash();
  }
  closeSplash = () => {
    setTimeout(() => {
      this.setState({
        splashScreen: false,
      });
    }, 2000);
  };
  render() {
    if (this.state.splashScreen) {
      return <SplashScreen />;
    } else {
      return (
        <Home
          sx={{
            background:
              "linear-gradient(180deg, rgba(30, 30, 40, 0.93) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%)",
            padding: "15px",
          }}
        >
          <Card
            sx={{
              background:
                "linear-gradient(180deg, rgba(30, 30, 40, 0.93) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%)",
              width: "100%",
              height: "100%",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <CarousalBanner />
            <CardContent
              sx={{ maxHeight: "100%", overflow: "auto", paddingBottom: 40 }}
            >
              <OverView />
              <ProfileHighlights />
            </CardContent>

            <Box
              sx={{
                background: "#20202a",
                position: "absolute",
                bottom: 0,
                padding: 1,
                textAlign: "center",
                zIndex: 999,
                width: "100%",
                fontSize: 12,
                textTransform: 'uppercase',
                color: "#FFFFFF30",
                fontWeight: 700
              }}
            >
              Created with React - MUI and Bootstrap
            </Box>
          </Card>
        </Home>
      );
    }
  }
}

export default Dashboard;
