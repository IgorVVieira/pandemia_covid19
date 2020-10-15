import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Form from './pages/form';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}></Route>
                <Route path='/patients' component={Form}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;