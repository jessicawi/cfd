import {Route, Switch} from "react-router-dom";
import React from "react";
import Dashboard from "../pages/02-01-dashboard/dashboard";
import Feed from "../pages/03-01-feed/03-01-feed-list";

const Routes = ((props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/feed" component={Feed}/>
            </Switch>
        </React.Fragment>
    );
});

export default Routes;
