import CarModel from "../database/models/CarModel";

interface ICreateCarService {
    marca: string,
    modelo: string,
    ano: number,
    preco: number
}

export class CreateCarService{
    public async execute({marca,modelo,ano,preco}: ICreateCarService): Promise<any>{

        const carData  = new CarModel({
            marca,
            modelo,
            ano,
            preco
        }) 
            
        const carCreated = await carData.save()
        return carCreated;
        
        
    }
}