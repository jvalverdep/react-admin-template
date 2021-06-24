import { Switch, Route, BrowserRouter } from "react-router-dom";
import { paths } from "./paths";
import { MainLayout } from "../components";
import Home from "../pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          component={() => (
            <MainLayout>
              <Switch>
                <Route exact path={paths.HOME} component={Home} />
                <Route
                  exact
                  path={paths.PAGE1}
                  component={() => <div>page 1</div>}
                />
                <Route
                  exact
                  path={paths.PAGE2}
                  component={() => <div>page 2</div>}
                />
                <Route
                  exact
                  path={paths.PAGE3}
                  component={() => <div>page 3</div>}
                />
              </Switch>
            </MainLayout>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
