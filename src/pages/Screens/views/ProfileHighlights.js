import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { withStyles, createStyles } from "@mui/styles";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { profileData } from "../../../assets/data/profileData";

const styles = (theme) => ({
  highlightCard: theme.palette.card,
  h5: theme.palette.h5,
  subtitle2: theme.palette.subtitle2
});

class ProfileHighlights extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container sx={{ width: "100%", margin: "auto" }} spacing={2}>
        {profileData.hightlights.map((data, index) => (
          <Grid item key={index} md={6} lg={4}>
            <Card variant="outlined" className={classes.highlightCard}>
              <CardHeader
                title={<Typography className={classes.h5} variant="h5" component="h5">{data.title}</Typography>}
                subheader={
                  <Typography className={classes.subtitle2} component="small" variant="subtitle2">
                    {data.description}
                  </Typography>
                }
              />
              <CardContent>
                <Typography align="justify" component="small" variant="p">
                  {data.content.substring(0, 120)}...{" "}
                  <a
                    target="_blank"
                    href={data.website}
                    className="text-primary text-underline small"
                  >
                    Read more
                  </a>
                </Typography>
              </CardContent>
              <Divider />
              <CardContent className="d-none">
                <Grid container spacing={2}>
                  {data.tags.slice(0, 2).map((tag) => (
                    <Grid item key={tag}>
                      <Chip label={tag} variant="outlined" />
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
              <CardActions>
                <Button color="secondary" variant="outlined" component="a" href={data.website}>
                  Website
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ProfileHighlights);
