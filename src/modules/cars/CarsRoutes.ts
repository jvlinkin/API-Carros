import { Router } from "express";
import routes from "../../shared/http/routes";
import {celebrate, Joi, Segments} from 'celebrate';
import { CarController } from "./controller/CarController";
const routesCars = Router();

const carController = new CarController();

routesCars.get('/', carController.index);

routesCars.get('/:id',celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().id().required()
    }
}) ,carController.showcar)

routesCars.post('/',celebrate({
    [Segments.BODY]:{
        marca: Joi.string().required(),
        modelo: Joi.string().required(),
        ano: Joi.number().required(),
        preco: Joi.number().required()
    }
}),carController.create)

routesCars.put('/:id',celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().id().required()
    },
    [Segments.BODY]:{
        marca: Joi.string().optional(),
        modelo: Joi.string().optional(),
        ano: Joi.number().optional(),
        preco: Joi.number().optional()
    }
}), carController.update)

routesCars.delete('/:id', celebrate({
    [Segments.PARAMS]:{
        id: Joi.string().id().required()
    }
})
 ,carController.delete)

export default routesCars;
