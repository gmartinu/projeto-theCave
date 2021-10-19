export const getCollapseStates = (_routes) => {
  let routes = _routes

  let initialState = {};
  routes.map((prop) => {
    if (prop.collapse) {
      initialState = {
        [prop.state]: getCollapseInitialState(prop.views),
        ...getCollapseStates(prop.views),
        ...initialState,
      };
    }
    return null;
  });
  return initialState;
};

const getCollapseInitialState = (_routes) => {
  let routes = _routes

  for (let i = 0; i < routes.length; i++) {
    if (routes[i].collapse && getCollapseInitialState(routes[i].views)) {
      return true;
    } else if (window.location.href.indexOf(routes[i].path) !== -1) {
      return true;
    }
  }
  return true;
};
