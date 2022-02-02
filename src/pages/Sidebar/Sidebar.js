import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Check } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import {
  Avatar,
  Card,
  CardHeader,
  CircularProgress,
  Fab,
  LinearProgress,
  Stack,
} from "@mui/material";
import ProfileAvatar from "../../components/ProfileAvatar";
import { profileData } from "../../assets/data/profileData";
import { green } from "@mui/material/colors";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles({
  drawer2: {
    bgColor: "background.default",
    position: "relative",
    marginLeft: "auto",
    width: 200,
    "& .MuiBackdrop-root": {
      display: "none",
    },
    "& .MuiDrawer-paper": {
      width: 200,
      position: "absolute",
      height: "90vh", //(props: { height: number }) => props.height,
      transition: "none !important",
    },
  },
  drawer: {
    position: "relative",
    height: "-webkit-fill-available",
    "& .MuiDrawer-paper": {
      position: "relative",
      marginLeft: "auto",
      overflow: "scroll",
      height: "-webkit-fill-available",
    },
  },
  profileCard: {
    minWidth: 200,
    margin: "auto",
    padding: 20,
    background:
      "linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)",
    borderRadius: 0,
  },
  profileName: {
    margin: 0,
    fontWeight: 900,
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
  profileSubHeader: {
    margin: 0,
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
    fontSize: "12px",
    fontWeight: 700,
  },
  contentCard: {
    background: "#20202a",
    borderRadius: 0,
    padding: "0px 15px",
  },
  contTitle: {
    fontSize: "12px",
    fontWeight: 500,
  },
  contVal: {
    color: "#8c8c8e",
    fontSize: "12px",
    fontWeight: 400,
  },
  skillsText: {
    color: "#8c8c8e",
    fontSize: "12px",
    fontWeight: 500,
  },
});

function Sidebar(props) {
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const buttonSx = {
    bgcolor: "inherit",
    boxShadow: "0px 0px 10px 0px #ffc007",
  };

  const drawer = (
    <div>
      <Card className={classes.profileCard}>
        <ProfileAvatar />
        <CardHeader
          title={
            <Typography className={classes.profileName}>
              {profileData.name}
            </Typography>
          }
          subheader={
            <Typography className={classes.profileSubHeader}>
              {profileData.title}
            </Typography>
          }
        />
      </Card>
      <Card className={classes.contentCard}>
        <List>
          {profileData.basicContent.map((item, index) => (
            <ListItem
              item
              key={index}
              secondaryAction={
                <Typography className={classes.contVal}>
                  {item.value}
                </Typography>
              }
            >
              <ListItemText
                primary={
                  <Typography className={classes.contTitle}>
                    {item.title}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Stack
          sx={{ margin: "auto", paddingBottom: 2, paddingTop: 2 }}
          spacing={1}
          direction="row"
        >
          {profileData.topSkills.slice(0, 3).map((item, index) => (
            <Box key={index}>
              <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ m: 1, position: "relative" }}>
                  <Fab
                    size="medium"
                    aria-label="save"
                    color="primary"
                    sx={{ ...buttonSx, color: "text.secondary" }}
                  >
                    {item.value}
                    {"%"}
                  </Fab>
                  <CircularProgress
                    size={52}
                    variant="determinate"
                    value={Number(item.value)}
                    thickness={2}
                    color="secondary"
                    sx={{
                      position: "absolute",
                      top: -2,
                      left: -2,
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Box>
              <Typography
                sx={{
                  color: "text.primary",
                  fontSize: "12px",
                  fontWeight: 700,
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Stack>
        <Divider />
        <Stack
          sx={{ margin: "auto", padding: 1.5 }}
          spacing={1}
          direction="column"
        >
          {profileData.topSkills.map((item, index) => (
            <Box key={index}>
              <Box sx={{ display: "flex", justifyContent: 'space-between', marginBottom: 1 }}>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                  className={classes.contTitle}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.primary",
                    fontSize: "12px",
                    fontWeight: 700,
                  }}
                  className={classes.contVal}
                >
                  {item.value} %
                </Typography>
              </Box>
              <LinearProgress
                size={52}
                variant="determinate"
                value={Number(item.value)}
                thickness={2}
                color="secondary"
                sx={{marginBottom: 1}}
              />
            </Box>
          ))}
        </Stack>
        <Divider />
        <List>
          {profileData.techSkills.map((text, index) => (
            <ListItem button key={text} sx={{ padding: 1 }}>
              <ListItemIcon sx={{ minWidth: 25 }}>
                <Check
                  sx={{
                    color: "primary.alternative",
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography className={classes.skillsText}>{text}</Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{
        position: "relative",
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
      aria-label="Profile Sidebar"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        className={classes.drawer}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
        className={classes.drawer}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Sidebar;
