import {Route, Switch} from "react-router-dom";
import React from "react";
import Dashboard from "../pages/02-01-dashboard/dashboard";

const Routes = ((props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
            </Switch>
        </React.Fragment>
    );
});

export default Routes;