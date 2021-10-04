import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBar from "./SideBar";
import ProfileComponent from "./ProfileComponent";

function StudentDashboard(props) {

    const [activeTab, setActiveTab] = React.useState('Profile');

    const setCurrentTab = (string) => {
        setActiveTab(string);
    }

    console.log({activeTab})

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SideBar setCurrentTab={setCurrentTab} currentTab={activeTab} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {activeTab === 'Profile' && <ProfileComponent />}
      </Box>
    </Box>
  );
}

export default StudentDashboard;
