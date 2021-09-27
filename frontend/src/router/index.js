import React from "react";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import App from "../App";
import AboutUsPage from "../Pages/AboutUsPage";
import CampusLife from "../Pages/CampusLifePage";
import MagazinePage from "../Pages/CampusLifePage/MagazinePage";
import StudentProfile from "../Pages/Profile/StudentProfile";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/about" exact component={AboutUsPage} />
                <Route path="/campus-life/:routename/:child" exact component={CampusLife} />
                <Route path="/campus-life/collegedaze" exact component={MagazinePage} />
                <Route path="/profile/student/:studentid" exact component={StudentProfile} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;