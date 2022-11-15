import { Switch, Route, Redirect } from 'react-router-dom';

import Login from 'pages/Login';

export default function PublicRouter() {
    return (
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Redirect path="*" to="/login" />
        </Switch>
    );
}
