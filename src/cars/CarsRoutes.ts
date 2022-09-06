import { Router } from "express";
import routes from "../shared/http/routes";
import { CarController } from "./controller/CarController";
const routesCars = Router();

const carController = new CarController();

routesCars.get('/', carController.index);

export default routesCars;
