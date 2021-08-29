import { Route, Switch, Redirect } from "react-router-dom";
import Organizations from "./Organizations";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/organizations">
                <Organizations />
            </Route>
        </Switch>
    );
};

export default Routes;
