import {Route, Switch} from "react-router-dom";
import React from "react";
import Dashboard from "../pages/02-dashboard/dashboard";
import Feed from "../pages/03-feed/feedList";
import Login from "../pages/00-Login/login";
import MarketRateList from "../pages/04-market/marketRateList";
import depositFunds from "../pages/05-deposit/depositFunds";

const Routes = ((props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" component={Feed}/>
                <Route exact path="/feed" component={Feed}/>
                <Route exact path="/dashboard" component={Dashboard}/>
                <Route exact path="/markets" component={MarketRateList}/>
                <Route exact path="/deposit" component={depositFunds}/>
                <Route exact path="/login" component={Login}/>
            </Switch>
        </React.Fragment>
    );
});

export default Routes;
