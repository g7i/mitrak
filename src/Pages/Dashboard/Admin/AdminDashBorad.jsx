import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import SidePanel from "./SidePanel";
import Typography from "@mui/material/Typography";
import StudentAdminDashboard from "./Students/StudentAdminDashboard";
import NotesComponent from "./Notes/index";
import { useParams } from "react-router";
import PlacementsPage from "./Placements";
const Router = [
  { name: "students", component: StudentAdminDashboard },
  { name: "notes", component: NotesComponent },
  { name: "placements", component: PlacementsPage },
];

function AdminDashboard(props) {
  const { child } = useParams();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <SidePanel />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {Router?.map((route) => {
          if (route.name === child) {
            return <route.component />;
          }
        })}
      </Box>
    </Box>
  );
}

export default AdminDashboard;
