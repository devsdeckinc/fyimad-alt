import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { CardHeader } from "@mui/material";
import TimePeriodAction from "./TimePeriodAction";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

const useStyles = makeStyles((theme) => ({
  highlightCard: {...theme.palette.card, width: 300},
  
  h5: theme.palette.h5,
  subtitle2: theme.palette.subtitle2,
}));
export default function TimelineCard(props) {
  const classes = useStyles();
  return (
    <Box>
      <Card className={classes.highlightCard} variant="outlined">
        <CardHeader
          title={
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {props.data.role || "Role"}
            </Typography>
          }
          subheader={
            <Typography variant="h5" component="div">
              {props.data.company || "Company"}
            </Typography>
          }
          action={<TimePeriodAction period={props.data.period}/>}
        />
        <CardContent>
          <Typography variant="body1">
            {props.data.content || "Worked on Multiple Project"}
          </Typography>
          <Typography variant="body2">
            {props.data.description || "Worked on Multiple Project"}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
