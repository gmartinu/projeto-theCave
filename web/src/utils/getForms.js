import { Route } from "react-router-dom";

export const getForms = (layout, history, _routes) => {
  let routes = _routes
  return routes.map((prop, key) => {
    if (prop.collapse) {
      return getForms(layout, history, prop.views);
    }
    if (prop.layout === layout) {
      return (
        <Route
          path={prop.layout + prop.path + "/:id"}
          component={prop.form}
          key={key + 1000}
          exact
        />
      );
    }
    return null;
  });
};
