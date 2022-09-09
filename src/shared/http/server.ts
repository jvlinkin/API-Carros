import * as dotenv from 'dotenv'
dotenv.config()
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { errors } from 'celebrate';
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes)
app.use(errors());
const port = process.env.PORT || 3333


//ambient variables
const db_pass = process.env.DB_PASS;



//Rota de teste
app.get('/', (req: Request, res: Response)=>{
    return res.json({message:"API it's working."})
})

app.listen(port, async ()=>{
    //connection string
    await mongoose.connect(`mongodb+srv://jvlinkin:${db_pass}@cluster0.q3aryd6.mongodb.net/?retryWrites=true&w=majority`)
    console.log("Server running on port 3333 || MongoDB connected!");
})