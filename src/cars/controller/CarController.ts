import { Request, Response } from "express";
import CarModel from "../database/models/CarModel";
import { ShowCarsService } from "../services/ShowCarsService";

export class CarController {
    public async index(req: Request, res: Response): Promise<Response>{

    const showCars = new ShowCarsService();
    const cars = await showCars.execute();
    
    return res.json(cars)
    }

}