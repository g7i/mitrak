import React from "react";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import App from "../App";
import AboutUsPage from "../Pages/AboutUsPage";
import CampusLife from "../Pages/CampusLifePage";
import PlacementPage from "../Pages/PlacementPage";
import MagazinePage from '../Pages/CampusLifePage/MagazinePage/index';  
import StudentProfile from "../Pages/Profile/StudentProfile";
import SidePanel from "../Pages/Dashboard/Admin/SidePanel";
import AdminDashboard from "../Pages/Dashboard/Admin/AdminDashBorad";

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
            path="/campus-life/:routename/:child"
            exact
            component={CampusLife}
          />
          <Route path="/placements" exact component={PlacementPage} />
          <Route
            path="/placements/:routename"
            exact
            component={PlacementPage}
          />
          <Route
            path="/profile/student/:studentid"
            exact
            component={StudentProfile}
          />
          <Route
            path="/admin/dashboard"
            exact
            component={AdminDashboard}
          />
        </Switch>
      </BrowserRouter>
    );
    }
// const Router = () => {
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Route path="/" exact component={App} />
//                 <Route path="/about" exact component={AboutUsPage} />
//                 <Route path="/campus-life/:routename/:child" exact component={CampusLife} />
//                 <Route path="/campus-life/collegedaze" exact component={MagazinePage} />
//             </Switch>
//         </BrowserRouter>
//     )
// }

export default Router;