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
import MandatoryDisclosuresPage from "../Pages/AcademicsPage/MandatoryDisclourePage/MandatoryDisclosuresPage.jsx";
import CoursesPage from "../Pages/AcademicsPage/CoursesPage";
import Offered from "../Pages/AcademicsPage/CoursesPage/Offered";
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
import InstituteFunctionaries from "../Pages/ContactsPage/InstituteFunctionaries";
import DivisionFunctionaries from "../Pages/ContactsPage/DivisionFunctionaries";
import NewsScreen from "../Pages/NewsPage";
import PlacementNewsScreen from "../Pages/PlacementNewsPage";
import CommiteePage from "../Pages/AcademicsPage/MandatoryDisclourePage/CommiteePages/index";
import Amenities from '../Pages/CampusLifePage/Amenities';
import HostelRegistration from "../Pages/CampusLifePage/Forms/HostelRegistration";
import PACForm from "../Pages/CampusLifePage/Forms/PACForm";
import PermissionGoingOutsideForm from "../Pages/CampusLifePage/Forms/PermissionGoingOutsideForm";
import HostelGrievanceForm from "../Pages/CampusLifePage/Forms/HostelGrievanceForm";
import WardenPage from "../Pages/CampusLifePage/WardenPage";
import ClubAndActivities from "../Pages/CampusLifePage/ClubAndActivities";
import StudentAffair from "../Pages/CampusLifePage/StudentAffair";
import Departments from "../Pages/AcademicsPage/departments/Departments";
import MandatoryPublicDisclosuresPage from "../Pages/AcademicsPage/MandatoryDisclourePage/MandatoryPublicDisclosure";
import FeeStructurePage from "../Pages/AcademicsPage/FeeStructurePage";
import NationalLevelEvents from "../Pages/CampusLifePage/NationalLevelEvents/index";
import Department from "../Pages/AcademicsPage/departments/Department";

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
        <Route
          exact
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
          <Route
            path="/academics/madatory-disclosures"
            exact
            component={MandatoryDisclosuresPage}
          />
          <Route
            path="/academics/fees-structure"
            exact
            component={FeeStructurePage}
          />
          <Route
            path="/academics/madatory-disclosures/public"
            exact
            component={MandatoryPublicDisclosuresPage}
          />
          <Route
            path="/academics/madatory-disclosures/:child"
            exact
            component={CommiteePage}
          />
          <Route path="/contact" exact component={ContactsPage} />
          <Route path="/news" exact component={NewsScreen} />
          <Route path="/placement-news" exact component={PlacementNewsScreen} />
          <Route
            path="/institute-functionaries"
            exact
            component={InstituteFunctionaries}
          />
          <Route
            path="/division-functionaries"
            exact
            component={DivisionFunctionaries}
          />

          {/*Campus Life */}
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
          <Route
            path="/campus-life/national-level-events"
            exact
            component={NationalLevelEvents}
          />
          <Route
            exact
            path="/campus-life/amenities/:route"
            component={Amenities}
          />
          <Route
            exact
            path="/campus-life/student-affair/:route"
            component={StudentAffair}
          />
          <Route
            path="/campus-life/club-and-activities/:route"
            exact
            component={ClubAndActivities}
          />
          <Route
            path="/campus-life/:routename/:child"
            exact
            component={CampusLife}
          />
          <Route
            path="/campus-life/hostel-registeration"
            exact
            component={HostelRegistration}
          />
          <Route path="/campus-life/pacform" exact component={PACForm} />
          <Route
            path="/campus-life/permission-going-outside"
            exact
            component={PermissionGoingOutsideForm}
          />
          <Route
            path="/campus-life/hostel-grievance"
            exact
            component={HostelGrievanceForm}
          />
          <Route
            path="/campus-life/hostel-warden"
            exact
            component={WardenPage}
          />

          {/*Placements*/}
          <Route path="/placements" exact component={PlacementPage} />
          <Route
            path="/placements/:routename"
            exact
            component={PlacementPage}
          />

          {/*Dashboard*/}
          <Route path="/admin/dashboard" exact component={AdminDashboard} />
          <Route
            path="/admin/dashboard/:child"
            exact
            component={AdminDashboard}
          />
          <Route
            path="/admin/dashboard/:child/:child2"
            exact
            component={AdminDashboard}
          />
          <Route path="/student/dashboard" exact component={StudentDashboard} />
          <Route path="/academics/departments/" exact component={Departments} />
          <Route
            path="/academics/departments/:route"
            exact
            component={Departments}
          />
          <Route
            path="/academics/departments/:route/:sub"
            exact
            component={Department}
          />
          <Route path="/academics/courses" exact component={Offered} />
          <Route path="/academics/courses/:route" exact component={Offered} />
          <Route
            path="/academics/:routename/:child"
            exact
            component={CampusLife}
            // component={MandatoryDisclosuresPage}
          />
        </Switch>
      </BrowserRouter>
    );
    }


export default Router;
