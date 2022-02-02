import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, CardMedia } from "@mui/material";
import profileBg from "./../../../assets/img/profilebg.jpg";
import "./styles.css";
import Typist from "react-text-typist";
import styled, { createGlobalStyle } from "styled-components";

const StyledTypist = styled(Typist)`
  font-size: 1rem;
  color: white;
  font-weight: bold;
`;

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function CarousalBanner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Card
      sx={{
        display: "flex",
        background: `linear-gradient(180deg, rgba(30, 30, 40, 0.93) 0%, rgba(30, 30, 40, 0.96) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%)`,
        margin: "auto",
        position: "relative",
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        image={profileBg}
        alt="Samraj Soundarajan Profile Background Image"
        style={{
          position: "absolute",
        }}
      />
      <Card
        style={{
          margin: "auto",
          position: "relative",
          background: "none",
          border: "0px",
          boxShadow: "none",
          height: "16rem",
          padding: "3rem",
          width: "100%",
        }}
      >
        <CardContent className="banner-content border-none">
          <div>
            <Typography
              className="font-weight-bold"
              variant="h4"
              component="h4"
              sx={{
                color: "#fafafc",
                fontSize: "36px !important",
                fontWeight: "900",
              }}
            >
              Welcome to My Portfolio{" "}
              <small style={{ fontSize: "12px", color: "#ffc107" }}> • Beta version •</small>
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "spaced-between",
              color: "#FFF",
              fontWeight: 500,
              fontSize: "1rem",
              fontFamily: '"Courier Prime", monospace',
            }}
          >
            <Typography>
              {" </"}
              <span
                style={{
                  color: "#FFC107",
                }}
              >
                code
              </span>
              {">"}
            </Typography>

            <StyledTypist
              sentences={[
                "I am a Full Stack Developer",
                "I build Website and Web Application",
                "I build iOS and Mobile Application",
                "I design and build AWS Cloud Solutions",
                "I am an Entrepreneur enthusiast",
              ]}
              cursorColor="#3F3D56"
              cursorClassName={"myCursor"}
              loop={true}
              startDelay={1000}
              multiTextDelay={1000}
              typeSpeed={30}
            />
            <Typography>
              {" </"}
              <span
                style={{
                  color: "#FFC107",
                }}
              >
                code
              </span>
              {">"}
            </Typography>
          </div>
          <br />
          <Button color="secondary" variant="contained">
            Explore
          </Button>
        </CardContent>
      </Card>
    </Card>
  );
}

export default CarousalBanner;
