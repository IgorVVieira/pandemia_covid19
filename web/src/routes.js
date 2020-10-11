import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;