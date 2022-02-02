import { Card, Typography } from "@mui/material";
import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";
import Home from "./../Website/Home/Home"

export default class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
