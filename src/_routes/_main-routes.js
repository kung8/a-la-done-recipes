import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pantry from '../_pages/Pantry';
import Grocery from '../_pages/Grocery';
import Recipes from '../_pages/Recipes';
import Favorites from '../_pages/Favorites';
import Login from '../_pages/Login';

const routes = (routeProps) => {
    return (
        <Switch>
            <Route path='/login' render={(props) => <Login {...props} />} />
            <Route path='/favorites' render={(props) => <Favorites {...props} {...routeProps} />} />
            <Route path='/recipes' render={(props) => <Recipes {...props} {...routeProps} />} />
            <Route path='/grocery' render={(props) => <Grocery {...props} {...routeProps} />} />
            <Route path='/' exact render={(props) => <Pantry {...props} {...routeProps} />} />
        </Switch>
    )
}

export default routes;
