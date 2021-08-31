import { Route, Switch, Redirect } from "react-router-dom";
import Organizations from "./Organizations";
import Home from "./Home";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/organizations">
                <Organizations />
            </Route>
        </Switch>
    );
};

export default Routes;
