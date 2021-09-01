import { Route, Switch, Redirect } from "react-router-dom";
import Organizations from "./Organizations";
import Home from "./Home";
import CategorySearch from "./CategorySearch";
import LocationSearch from "./LocationSearch";

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
            <Route exact path="/locations">
                <LocationSearch />
            </Route>
        </Switch>
    );
};

export default Routes;
