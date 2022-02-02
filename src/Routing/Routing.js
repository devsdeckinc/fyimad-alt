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
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Screens/Dashboard";
import Experience from "../pages/Screens/Experience";

export default class Routing extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    console.log(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Users2 />} />
          <Route path="/blogs" element={<Users2 />} />
          <Route path="/projects" element={<Users2 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

function Users2() {
  let params = useLocation();
  console.log(params);
  return (
    <Home params={params}>
      <Link to="users">My Home</Link>
    </Home>
  );
}
