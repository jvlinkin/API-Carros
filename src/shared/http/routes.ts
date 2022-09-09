import { Router } from "express";
import routesCars from "../../modules/cars/CarsRoutes";

const routes = Router();
routes.use('/cars', routesCars )

export default routes