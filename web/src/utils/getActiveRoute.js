export const getActiveRoute = (_routes) => {
  let routes = _routes
  let activeRoute = '';
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].collapse) {
      let collapseActiveRoute = getActiveRoute(routes[i].views);
      if (collapseActiveRoute !== activeRoute) {
        return collapseActiveRoute;
      }
    } else {
      if (routes[i].form) {
        let path = window.location.pathname.split('/');
        path.splice(-1, path.length).join('/');
        if (path.join('/') === routes[i].layout + routes[i].path) {
          return routes[i];
        }
      }
      if (window.location.pathname === routes[i].layout + routes[i].path) {
        return routes[i];
      }
    }
  }
  return activeRoute;
};
