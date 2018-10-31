import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import Home from '../comps/Home/Home';
import Login from '../comps/Login/Login';
import Topology from '../comps/Topology/Topology';
import "../statics/css/base.scss";
const Routes = () => {
    return (
        <BrowserRouter>
            <div style={{ height: '100%', width: "100%" }}>
                <Route exact path="/" component={ Login }/>
                <Route path="/login" component={ Login }/>
                <Route path="/home" component={ Home }/>
                <Route path="/topology" component={ Topology }/>
            </div>
        </BrowserRouter>
    )
};

export default Routes;