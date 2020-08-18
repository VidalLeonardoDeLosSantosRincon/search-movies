import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import App from "../components/App";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/404";



export const AppRoutes = () =>{
    return(
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/details/:id" component={Details}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </App>
        </Router>
    );

}