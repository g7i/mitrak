import React from "react";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import App from "../App";
import AboutUsPage from "../Pages/AboutUsPage";
import CampusLife from "../Pages/CampusLifePage";
import PlacementPage from "../Pages/PlacementPage";
import MagazinePage from '../Pages/CampusLifePage/MagazinePage/index';  
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashBorad";
import EventGallery from "../Pages/CampusLifePage/EventGallery";
import DepartmentsPage from "../Pages/AcademicsPage/DepartmentsPage";
import MandatoryDisclosuresPage from "../Pages/AcademicsPage/MandatoryDisclosuresPage";
import CoursesPage from "../Pages/AcademicsPage/CoursesPage";
import StudentDashboard from "../Pages/Dashboard/Student/StudentDashboard";

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/about" exact component={AboutUsPage} />
          <Route
            path="/campus-life/collegedaze"
            exact
            component={MagazinePage}
          />
          <Route
            path="/campus-life/events-gallery/:child"
            exact
            component={EventGallery}
          />

          <Route path="/placements" exact component={PlacementPage} />
          <Route
            path="/campus-life/:routename/:child"
            exact
            component={CampusLife}
          />

          <Route
            path="/placements/:routename"
            exact
            component={PlacementPage}
          />
          <Route path="/admin/dashboard" exact component={AdminDashboard} />
          <Route path="/student/dashboard" exact component={StudentDashboard} />
          <Route
            path="/academics/madatory-disclosures"
            exact
            component={MandatoryDisclosuresPage}
          />
          <Route
            path="/academics/departments/:child"
            exact
            component={DepartmentsPage}
          />
          <Route
            path="/academics/courses"
            exact
            component={CoursesPage}
          />
          <Route
            path="/academics/courses/:child"
            exact
            component={CoursesPage}
          />
        </Switch>
      </BrowserRouter>
    );
    }


export default Router;