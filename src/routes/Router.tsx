import { Switch, Route, Redirect } from 'react-router-dom';

import Page404 from 'pages/404';
import { ChangeInfo, ChangePassword } from 'pages/Admin';
import Chart from 'pages/Chart';
import CSV from 'pages/CSV';
import { DashboardDetail, DashboardEdit, DashboardList, DashboardUpload } from 'pages/Dashboard';
import Editor from 'pages/Editor';
import Search from 'pages/Search';
import RouteWrapper from 'routes/RouteWrapper';

export default function Router() {
    return (
        <Switch>
            <RouteWrapper path="/" exact component={DashboardList} />
            <RouteWrapper path="/upload" component={DashboardUpload} />
            <RouteWrapper path="/edit/:idx" component={DashboardEdit} />
            <RouteWrapper path="/detail/:idx" component={DashboardDetail} />

            <RouteWrapper path="/admin/info" exact component={ChangeInfo} />
            <RouteWrapper path="/admin/password" exact component={ChangePassword} />

            <RouteWrapper path="/search" exact component={Search} />
            <RouteWrapper path="/editor" exact component={Editor} />
            <RouteWrapper path="/csv" exact component={CSV} />
            <RouteWrapper path="/chart" exact component={Chart} />

            <Route path="/login" exact>
                <Redirect to="/" />
            </Route>
            <Route path="*" component={Page404} />
        </Switch>
    );
}
