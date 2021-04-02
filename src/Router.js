import { Switch, Route } from "react-router-dom";
import { Welcome, Chat } from '@pages';
import { PrivateRoute } from "@components";

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Welcome} />
            <PrivateRoute path="/chat" exact component={Chat} />
            <Route path='*' exact component={Welcome} />
        </Switch>
    );
}

export default Routes;
