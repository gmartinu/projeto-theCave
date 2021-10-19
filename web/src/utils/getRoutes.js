import { Route } from "react-router-dom";

export const getRoutes = (layout, history, _routes) => {
  let routes = _routes;
  return routes.map((prop, key) => {
    if (prop.collapse) {
      return getRoutes(layout, history, prop.views);
    }
    if (prop.layout === layout) {
      const Component = prop.component;
      return (
        <Route
          path={prop.layout + prop.path}
          render={(routeProps) => (
            <Component history={history} {...routeProps} />
          )}
          key={key}
          exact
        />
      );
    }
    return null;
  });
};
