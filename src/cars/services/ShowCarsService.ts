import CarModel from "../database/models/CarModel";

export class ShowCarsService {
    public async execute(): Promise<any>{

        const cars = await CarModel.find()
        return cars;
    }
}

