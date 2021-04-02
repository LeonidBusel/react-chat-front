import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ path, exact, component }) => {
    return true ? (<Route path={path} exact={exact} component={component} />) :
        (<Redirect to="/" />);
};

export default PrivateRoute;