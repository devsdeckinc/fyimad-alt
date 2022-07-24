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
import Projects from "../pages/Screens/Projects";
import Skills from "../pages/Screens/Skills";

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
          <Route path="/skills" element={<Skills />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
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


function Blogs() {
  let params = useLocation();
  console.log(params);
  return (
    <Home params={params}>
      <Typography>Blogs is Coming Soon</Typography>
      <div>
        <a href="https://medium.com/@devsfutureinc" target="_blank">
          Visit My Medium Blog Page
        </a>
      </div>
      <Link to="/">Go Home</Link>
    </Home>
  );
}
