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
import AdminProfile from "./AdminProfile";
import NoticePage from './Notice'
import NewsPage from "./News";
import ContactMessages from "./ContactMessages";
import ManageNewsPage from "./News/manage-news";
import ManageNotesPage from "./Notes/manage-notes";
import UploadData from "./UploadData";

const Router = [
  { name: "admin profile", component: AdminProfile },
  { name: "students", component: StudentAdminDashboard },
  { name: "upload notes", component: NotesComponent },
  { name: "manage notes", component: ManageNotesPage },
  { name: "new notice", component: NoticePage },
  { name: "manage notice", component: NoticePage },
  { name: "upload placements", component: PlacementsPage },
  { name: "manage placements", component: PlacementsPage },
  { name: "upload news", component: NewsPage },
  { name: "manage news", component: ManageNewsPage },
  { name: "contact messages", component: ContactMessages },
  { name: "upload data (new)", component: UploadData },
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
        {
          !child && (
            <AdminProfile />
          )
        }
      </Box>
    </Box>
  );
}

export default AdminDashboard;
