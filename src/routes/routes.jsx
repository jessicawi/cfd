import {Route, Switch} from "react-router-dom";
import React from "react";
import Dashboard from "../pages/02-dashboard/dashboard";
import Feed from "../pages/03-feed/feedList";
import Login from "../pages/00-Login/login";

const Routes = ((props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/feed" component={Feed}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </React.Fragment>
    );
});

export default Routes;
