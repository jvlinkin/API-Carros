import { Request, Response } from "express";
import { isValidObjectId, ObjectId } from "mongoose";
import CarModel from "../database/models/CarModel";
import { CreateCarService } from "../services/CreateCarService";
import { ShowCarsService } from "../services/ShowCarsService";


export class CarController {
    public async index(req: Request, res: Response): Promise<Response>{

    const showCars = new ShowCarsService();
    const cars = await showCars.execute();
    
    return res.json(cars)
    }

    public async showcar(req:Request, res: Response): Promise<Response>{
        const {id} = req.params;

        const car = await CarModel.findById(id);

        if(!car){
            return res.status(404).json({message:'Car ID not found.'})
        }
        return res.json({car});
    }

    public async create(req: Request, res: Response): Promise<Response>{
        const {marca, modelo, ano, preco} = req.body;

        try {
            const createCarService = new CreateCarService();
            const car = await createCarService.execute({marca, modelo, ano, preco})

            return res.json({
            message:'Car created successfully.',
            car
        })
            
        } catch (error) {
            console.log(error)
            return res.json({message:'Internal server error.'})
            
        }

    }

    public async update(req: Request, res: Response): Promise<Response>{
        const {id} = req.params;
        const {marca, modelo, ano, preco} = req.body;

        if(Object.keys(req.body).length === 0){
            return res.json({message:'Body cannot be empty.'})
        }
    
        const car = await CarModel.findByIdAndUpdate(id,{
        marca,modelo,ano,preco
        })

        if(!car){
            return res.json({message:'Car ID not found.'})
        }

        await car?.save()        
        return res.json({message:'Car updated.'})

    }

    public async delete(req:Request, res: Response): Promise<Response>{

        const {id} = req.params

            const car = await CarModel.findByIdAndDelete(id);

            if(!car){
                return res.json({message:'Car ID not found.'})
            }

            return res.json({message:'Car deleted.'})
 
    }
}