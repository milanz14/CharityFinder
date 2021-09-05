import { Route, Switch, Redirect } from "react-router-dom";
import Organizations from "./Organizations";
import Home from "./Home";
import CategorySearch from "./CategorySearch";
import Register from "./Register";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/organizations">
                <Organizations />
            </Route>
            <Route exact path="/categories">
                <CategorySearch />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
        </Switch>
    );
};

export default Routes;
