import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  highlightCard: theme.palette.card,
  h5: theme.palette.h5,
  subtitle2: theme.palette.subtitle2,
}));
export default function ProjectBox(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  return (
    <Card sx={{ background: "inherit" }}>
      {props.data.map((proj) => (
        <Accordion
          expanded={expanded === proj.title}
          onChange={handleChange(proj.title)}
          sx={{ background: "#252531" }}
          variant="outlined"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={proj.description}
            id={proj.title}
          >
            <Typography sx={{ textAlign: "left", width: "33%", flexShrink: 0 }}>
              <CardHeader
              
                title={<Typography className={classes.h5} variant="h5" component="h5">{proj.title}</Typography>}
              />{" "}
            </Typography>
            <Typography sx={{ margin: "auto", color: "text.secondary" }}>
              {proj.type}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CardContent>
              <Divider>
                <Typography
                  className="w-100 d-flex text-muted text-uppercase font-weight-bold my-2"
                  variant="h6"
                  component="div"
                >
                  Description :
                </Typography>
              </Divider>
              <Typography sx={{ textAlign: "left" }}>
                {proj.description}
              </Typography>
              <Divider>
                {" "}
                <Typography
                  className="w-100 d-flex text-muted text-uppercase font-weight-bold my-2"
                  variant="h6"
                  component="div"
                >
                  Project Length :
                </Typography>{" "}
              </Divider>
              <Typography sx={{ textAlign: "left" }}>{proj.period}</Typography>
              <Divider>
                {" "}
                <Typography
                  className="w-100 d-flex text-muted text-uppercase font-weight-bold my-2"
                  variant="h6"
                  component="div"
                >
                  Tech Stack :
                </Typography>{" "}
              </Divider>
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  margin: 2,
                  background: "inherit",
                  "&:hover": {
                    background: "none",
                    boxShadow: "0px 0px 5px #fbc107",
                  },
                }}
              >
                {proj.techStack.map((tstack) => (
                  <Box key={tstack} p={2}>
                    <Chip label={tstack} variant="outlined" />
                  </Box>
                ))}
              </Card>
              <Divider>
                <Typography
                  className="w-100 d-flex text-muted text-uppercase font-weight-bold my-2"
                  variant="h6"
                  component="div"
                >
                  Integrations :
                </Typography>
              </Divider>
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  margin: 2,
                  background: "inherit",
                  "&:hover": {
                    background: "none",
                    boxShadow: "0px 0px 5px #fbc107",
                  },
                }}
              >
                {proj.integrations.map((inte) => (
                  <Box key={inte} p={2}>
                    <Chip label={inte} variant="outlined" />
                  </Box>
                ))}
              </Card>
            </CardContent>
          </AccordionDetails>
        </Accordion>
      ))}
    </Card>
  );
}
