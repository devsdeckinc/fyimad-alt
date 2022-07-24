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
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  BusinessCenterOutlined,
  ComputerOutlined,
  HomeOutlined,
  MenuOutlined,
  NewspaperOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Card, Collapse, Fade, Slide } from "@mui/material";
import { profileData } from "../../assets/data/profileData";
import { useLocation } from "react-router-dom";

const drawerWidth = 240;
const minWidth = 70;
const useStyles = makeStyles((theme) => ({
  drawer2: {
    position: "relative",
    marginLeft: "auto",
    width: 200,
    "& .MuiBackdrop-root": {
      display: "none",
    },
    "& .MuiDrawer-paper": {
      width: 200,
      position: "absolute",
      height: "100vh", //(props: { height: number }) => props.height,
      transition: "none !important",
    },
  },
  drawer: {
    position: "relative",
    height: "-webkit-fill-available",
    boxShadow: "none",
    border: "none",
    "& .MuiDrawer-paper": {
      boxShadow: "none",
      marginRight: "auto",
      position: "relative",
      transition: "all 0.4s ease-out !important",
      height: "97vh",
    },
    transition: "all 0.4s ease-out !important",
  },
  icon: {
    opacity: 0.9,
    fontSize: 20,
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
  drawerCard: {
    height: "100%", 
    background: theme.palette.background.alternative
  }
}));
function DrawerBox(props) {
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let history = useLocation();

  const [tab, setTab] = React.useState(
    (history &&
      history.pathname.toString().replace("/", "")) ||
      "Home"
  );
  const drawer = (
    <Box className={classes.drawerCard}>
      <AppBar
        sx={{
          position: "relative",
          background:
            "linear-gradient(159deg, rgba(37, 37, 50, 0.98) 0%, rgba(35, 35, 45, 0.98) 100%)",
          padding: 2,
        }}
      >
        <IconButton
          sx={{ background: "inherit" }}
          onClick={() => setOpen(!open)}
        >
          <MenuOutlined sx={{ color: "#FFF" }} />
        </IconButton>
      </AppBar>
      <Box sx={{ minHeight: 100, marginTop: 5 }}>
        <Typography className="vertical-text m-auto">{tab}</Typography>
      </Box>
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Fade in={open}>
          <List>
            {profileData.menuLink.map((item, index) => (
              <Slide
                direction="left"
                in={open}
                mountOnEnter
                unmountOnExit
                key={index}
                timeout={index * 400}
              >
                <ListItem
                  button
                  component="a"
                  href={item.link}
                  onClick={() => setTab(item.title)}
                >
                  <ListItemIcon>
                    {item.title == "Home" && (
                      <HomeOutlined
                        color="secondary"
                        className={classes.icon}
                      />
                    )}
                    {item.title == "Experience" && (
                      <WorkOutlineOutlined
                        color="secondary"
                        className={classes.icon}
                      />
                    )}
                    {item.title == "Project" && (
                      <BusinessCenterOutlined
                        color="secondary"
                        className={classes.icon}
                      />
                    )}
                    {item.title == "Skills" && (
                      <ComputerOutlined
                        color="secondary"
                        className={classes.icon}
                      />
                    )}
                    {item.title == "Blogs" && (
                      <NewspaperOutlined
                        color="secondary"
                        className={classes.icon}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography
                        sx={{
                          fontWeight: 500,
                          textTransform: "uppercase",
                          letterSpacing: 1,
                          fontSize: 11,
                        }}
                      >
                        {item.title}
                      </Typography>
                    }
                  />
                </ListItem>
              </Slide>
            ))}
            <Divider />
            <Card className="shadow-none" sx={{background: "inherit"}}>
              <List>
                {profileData.extraContent.map((item, index) => (
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
            </Card>
          </List>
        </Fade>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      component="nav"
      sx={{
        width: { lg: `${open ? drawerWidth : minWidth}` },
        flexShrink: { sm: 0 },
        background: "#20202a",
        height: "100% !important",
      }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        anchor="right"
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        className={classes.drawer}
        sx={{
          display: { xs: "block", sm: "none" },
          width: `${open ? drawerWidth : minWidth}px !important`,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: `${open ? drawerWidth : minWidth}px !important`,
          },
          background: "#20202a",
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        className={classes.drawer}
        anchor="right"
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: `${open ? drawerWidth : minWidth}px !important`,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: `${open ? drawerWidth : minWidth}px !important`,
          },
          background: "#20202a",
        }}
        open
      >
        {drawer}
        <AppBar
          position="fixed"
          color="primary"
          sx={{ display: "none", top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <MoreIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Drawer>
    </Box>
  );
}

export default DrawerBox;
