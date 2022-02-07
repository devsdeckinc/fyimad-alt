import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

import "./styles.css";

import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { SkillsImage } from "./views/SkillsImage";
import Home from "../Home/Home";

export const skillsData = [
  "HTML",
  "Javascript",
  "CSS",
  "React",
  "React Native",
  "MaterialUI",
  "Ionic",
  "PHP",
  "AWS",
  "Node JS",
  "Bootstrap",
  "Firebase",
  "MySQL",
  "PostgreSQL",
  "Angular JS",
];

export const ToolsUsed = [
  "VS Code",
  "GIT",
  "Android Studio",
  "Xcode",
  "Figma",
  "Adobe XD",
  "CPanel",
  "Maps API",
  "Serverless",
  "PWA",
  "Postman",
];

function Skills() {
  const skillBoxStyle = {
    background:
      "linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)", //""#1e1e28",
    boxShadow: `0px 0px 30px #1e1e28`,
    margin: 10,
    padding: "20px",
    //background: "#1e1e28"
  };

  return (
    <Home title="Skills" sx={{ background: "inherit" }}>
      <Paper
        sx={{
          background:
            "linear-gradient(180deg, rgba(30, 30, 40, 0.93) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%)",
        }}
      >
        <Card sx={{ background: "inherit" }}>
          <CardHeader
            className="w-100 mx-3 p-3"
            title={
              <Typography
                className="w-100 text-left d-flex"
                sx={{ fontSize: "1rem", fontWeight: 600 }}
              >
                Skills
              </Typography>
            }
            subheader={
              <Typography className="w-100 text-left d-flex">
                Technologies Worked with building projects
              </Typography>
            }
          />
          <CardContent sx={{ margin: "auto", width: "100%" }}>
            <Marquee
              gradient={true}
              gradientColor={[30, 30, 40]}
              speed={100}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="left"
              style={{ width: "1000px", margin: "auto" }}
            >
              {skillsData.map((skill, id) => (
                <Card
                  variant="outlined"
                  sx={{ width: 150, height: 150 }}
                  key={id}
                  style={skillBoxStyle}
                  spacing={3}
                >
                  <img
                    style={{ height: "50px", margin: "auto" }}
                    src={SkillsImage(skill)}
                    alt={skill}
                  />
                  <h3 className="skill-text" style={{ color: "secondary" }}>
                    {skill}
                  </h3>
                </Card>
              ))}
            </Marquee>
          </CardContent>
        </Card>
        <Card sx={{ background: "inherit" }}>
          <CardHeader
            className="w-100 mx-3 p-3"
            title={
              <Typography
                className="w-100 text-left d-flex px-3"
                sx={{ fontSize: "1rem", fontWeight: 600 }}
              >
                Tools and Others
              </Typography>
            }
            subheader={
              <Typography className="w-100 text-left d-flex px-3">
                Tools used for building projects
              </Typography>
            }
          />
          <CardContent sx={{ margin: "auto", width: "100%" }}>
            <Marquee
              gradient={true}
              gradientColor={[30, 30, 40]}
              speed={100}
              pauseOnHover={true}
              pauseOnClick={true}
              delay={0}
              play={true}
              direction="right"
              style={{ width: "1000px", margin: "auto" }}
            >
              {ToolsUsed.map((skill, id) => (
                <Card
                  variant="outlined"
                  sx={{ width: 150, height: 150 }}
                  key={id}
                  style={skillBoxStyle}
                  spacing={3}
                >
                  <img
                    style={{ height: "50px", margin: "auto" }}
                    src={SkillsImage(skill)}
                    alt={skill}
                  />
                  <h3 className="skill-text" style={{ color: "secondary" }}>
                    {skill}
                  </h3>
                </Card>
              ))}
            </Marquee>
          </CardContent>
        </Card>
      </Paper>
    </Home>
  );
}

export default Skills;
