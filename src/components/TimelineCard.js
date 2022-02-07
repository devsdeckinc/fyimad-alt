import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import {
  CardActionArea,
  CardHeader,
  Collapse,
  Fade,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import TimePeriodAction from "./TimePeriodAction";
import { Check, ExpandMoreOutlined } from "@mui/icons-material";

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
  highlightCard: { ...theme.palette.card, width: 400 },
  h5: theme.palette.h5,
  subtitle2: theme.palette.subtitle2,
}));
export default function TimelineCard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

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
          action={<TimePeriodAction period={props.data.period} />}
        />
        <CardContent>
          <CardContent>
            <Typography variant="body2">
              {props.data.description || "Worked on Multiple Project"}
            </Typography>
          </CardContent>
          {props.data.project && (
            <Card className={classes.highlightCard}>
              <CardHeader
                title={
                  <Typography
                    variant="small"
                    sx={{ textDecoration: "underline" }}
                    className="font-weight-bold"
                  >
                    Academic Project
                  </Typography>
                }
              />
              <CardContent>
                <Typography>{props.data.project}</Typography>
              </CardContent>
            </Card>
          )}
          <CardActions
            className="w-100"
            onClick={() => setOpen(!open)}
            disableSpacing
          >
            <Button color="secondary">
              Read More <ExpandMoreOutlined />
            </Button>
          </CardActions>
          <CardActionArea>
            <Collapse in={open}>
              <Fade in={open}>
                <List>
                  {props.data.duties.map((item, index) => (
                    <ListItem>
                      <ListItemIcon sx={{ minWidth: 25 }}>
                        <Check
                          sx={{
                            color: "primary.alternative",
                            fontSize: 15,
                            fontWeight: 700,
                          }}
                        />
                      </ListItemIcon>
                      <ListItemText>
                        <Typography
                          sx={{
                            color: "#8c8c8e",
                            fontSize: "14px",
                            fontWeight: 500,
                          }}
                        >
                          {item}
                        </Typography>
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
              </Fade>
            </Collapse>
          </CardActionArea>
        </CardContent>
      </Card>
    </Box>
  );
}
