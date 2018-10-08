import React from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import Home from '../comps/Home/Home';
import Login from '../comps/Login/Login';
const Routes = () => {
    return (
        <BrowserRouter>
            <div style={{ height: '100%' }}>
                <Route exact path="/" component={ Login }/>
                <Route path="/login" component={ Login }/>
                <Route path="/home" component={ Home }/>
            </div>
        </BrowserRouter>
    )
};

export default Routes;