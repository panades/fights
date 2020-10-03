import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './../App';
import Error404 from './error404';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route component={Error404} />
        </Switch>
    </BrowserRouter>
)

export default Router;