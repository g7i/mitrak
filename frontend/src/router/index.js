import React from "react";
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import App from "../App";
import AboutUsPage from "../Pages/AboutUsPage";
import CampusLife from "../Pages/CampusLifePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/about" exact component={AboutUsPage} />
                <Route path="/campus-life/:routename" exact component={CampusLife} />
                <Route path="/campus-life/:routename/:child" exact component={CampusLife} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;