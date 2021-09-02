import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { routes } from './routes';

const AppRouter = () => {
    return (
        <Switch>
            {
                routes.map(route =>
                    <Route
                        key={route.path}
                        component={route.component}
                        exact
                        path={route.path}
                    />
                )
            }
        </Switch>
    )
}

export default AppRouter