import featureRouter from "../feature/feature.router";
const routes = new Map();

// define global routes here
routes.set("/feature", featureRouter);

export default routes;
