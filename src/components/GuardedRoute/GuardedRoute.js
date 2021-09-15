const React = require("react");
const { Route, Redirect } = require("react-router");

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            auth === true ? <Component {...props} /> : <Redirect to="/login" />
        }
    />
);

export default GuardedRoute;
