import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <div className="App">

                <Switch>
                    <PrivateRoute exact path='/protected' component={BubblePage} />
                    <Route exact path="/" component={Login} />
                    <Redirect to='/' />
                </Switch>

            </div>
        </Router>
    );
}

export default App;
