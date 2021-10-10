import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import SideBar from "./SideBar";
import ProfileComponent from "./ProfileComponent";
import DownloadNotes from "./DownloadNotes";
import Results from "./Results";
import AcademicCalander from "./AcademicCalander";

function StudentDashboard(props) {

    const [activeTab, setActiveTab] = React.useState('Profile');

    const setCurrentTab = (string) => {
        setActiveTab(string);
    }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SideBar setCurrentTab={setCurrentTab} currentTab={activeTab} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {activeTab === 'Profile' && <ProfileComponent />}
        {activeTab === 'Download Notes' && <DownloadNotes />}
        {activeTab === 'Results' && <Results />}
        {activeTab === 'Academic Calander' && <AcademicCalander />}
      </Box>
    </Box>
  );
}

export default StudentDashboard;
