import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//-------------------
import PeopleIcon from "@mui/icons-material/People";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessIcon from '@mui/icons-material/Business';
import { ImageLogo, ListItemMainWrapper } from "./Styles";
import { Link, useParams, useHistory } from "react-router-dom";

const sidePanelData = [
  {
    title: "Admin Profile",
    icon: <PeopleIcon />,
  },
  
  {
    title: "Upload Notes",
    icon: <MenuBookIcon />,
  },
  {
    title: "New Notice",
    icon: <NotificationsIcon />,
  },
  {
    title: "Placements",
    icon: <BusinessIcon />,
  },
];

const drawerWidth = 240;

function SidePanel(props) {
  const { child , child2 } = useParams();
  const history = useHistory();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [listOpen, setListOpen] = React.useState({
    Students: false,
    Notes: false,
    Notice: false,
    Resul: false,
    Placements: false,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Link to="/">
          <ImageLogo
            src={
              "https://www.mitrc.ac.in/wp-content/uploads/2019/05/mitrc_logo_small.png"
            }
            alt={"mitrc-logo"}
          />
        </Link>
      </Toolbar>
      <Divider />
      <List>
        {sidePanelData.map((item, index) =>
          item.list ? (
            <>
              <ListItemMainWrapper open={listOpen[item.title]}>
                <ListItem
                  button
                  key={item.title}
                  onClick={() => {
                    setListOpen({
                      ...listOpen,
                      [item.title]: !listOpen[item.title],
                    });
                  }}
                  
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
                {item?.list?.map((option) => (
                  <ListItem
                    button
                    key={option.title}
                    onClick={() => {
                      history.push(
                        `/admin/dashboard/${item.title.toLowerCase()}/${option.title.toLowerCase()}`
                      );
                    }}
                    style={{
                      backgroundColor:
                        child === item.title.toLowerCase() &&
                        child2 === option.title.toLowerCase() &&
                        "rgba(26, 118, 210, 0.3)",
                    }}
                    className={"listItem"}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={option.title} />
                  </ListItem>
                ))}
              </ListItemMainWrapper>
            </>
          ) : (
            <ListItem
              button
              key={item.title}
              onClick={() => {
                history.push(`/admin/dashboard/${item.title.toLowerCase()}`);
              }}
              style={{
                backgroundColor:
                  child === item.title.toLowerCase() && "#1a76d2",
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
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
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default SidePanel;
