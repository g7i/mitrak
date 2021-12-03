import React, {useEffect} from "react";
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
import Login from "../Pages/AuthPage/Login";
import Register from "../Pages/AuthPage/Register";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "../utils/firebase/auth";
import {useStore} from "../store";
import {getUser} from "../utils/firebase/users";
import ContactsPage from "../Pages/ContactsPage";
import Bot from "../components/Bot/Bot";
import HowToReach from "../Pages/HowToReachPage";

const Router = () => {
  const {
    actions: { updateUser }
  } = useStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUser(user.uid);
        updateUser({
          ...userData,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else updateUser(null);
      unsubscribe();
    });
  }, []);

    return (
      <BrowserRouter>
        <Route exact
            path={[
              "/",
              "/about",
              "/contact",
              "/placements/*",
              "/campus-life/*",
              "/academics/*",
            ]}
            component={Bot}
        />
        <Switch>
          {/* Authentication Routes */}
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />

          <Route path="/" exact component={App} />
          <Route path="/about" exact component={AboutUsPage} />
          <Route path="/how-to-reach" exact component={HowToReach} />
          <Route path="/contact" exact component={ContactsPage} />
          <Route path="/campus-life/collegedaze" exact component={MagazinePage} />
          <Route path="/campus-life/events-gallery/:child" exact component={EventGallery} />
          <Route path="/placements" exact component={PlacementPage} />
          <Route path="/campus-life/:routename/:child" exact component={CampusLife} />
          <Route path="/placements/:routename" exact component={PlacementPage} />
          <Route path="/admin/dashboard" exact component={AdminDashboard} />
          <Route path="/admin/dashboard/:child" exact component={AdminDashboard} />
          <Route path="/admin/dashboard/:child/:child2" exact component={AdminDashboard} />
          <Route path="/student/dashboard" exact component={StudentDashboard} />
          <Route path="/academics/madatory-disclosures" exact component={MandatoryDisclosuresPage} />
          <Route path="/academics/departments/:child" exact component={DepartmentsPage} />
          <Route path="/academics/courses" exact component={CoursesPage} />
          <Route path="/academics/courses/:child" exact component={CoursesPage} />
        </Switch>
      </BrowserRouter>
    );
    }


export default Router;
