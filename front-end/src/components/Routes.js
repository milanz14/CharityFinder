import { Route, Switch, Redirect } from "react-router-dom";
import Organizations from "./Organizations";
import Home from "./Home";
import CategorySearch from "./CategorySearch";

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
        </Switch>
    );
};

export default Routes;
