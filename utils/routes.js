const ROUTES = [];


const addRoutes = (routes) => {
  ROUTES.push(...routes);
};

const getRoute = (id) => {
  const filter = ROUTES.filter(elem => elem._id === id);

  if (filter.length > 0) return filter[0].url;

  return '';
};


export default {
  addRoutes,
  getRoute
};
