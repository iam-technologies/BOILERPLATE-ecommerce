const ROUTES = [];


const addRoutes = (routes) => {
  ROUTES.push(...routes);
};

const getRoute = (id) => {
  const filter = ROUTES.filter(elem => elem._id === id);

  if (filter.length > 0) return filter[0].url;

  return '';
};


const isCategory = (url, routes) => {
  const category = routes.some((elem) => {
    const categoryUrl = `/${elem.url.split('/').pop()}`;
    return categoryUrl === url;
  });

  return category;
};

export default {
  addRoutes,
  getRoute,
  isCategory
};
