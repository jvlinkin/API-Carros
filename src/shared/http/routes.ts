import { Router } from "express";
import routesCars from "../../cars/CarsRoutes";

const routes = Router();
routes.use('/cars', routesCars )

export default routes