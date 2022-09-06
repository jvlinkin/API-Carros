import express, { Request, Response } from "express";
import routes from "./routes";

const app = express();
app.use(express.json());
app.use(routes)
const port = 3333

//Rota de teste
app.get('/', (req: Request, res: Response)=>{
    return res.json({message:"API it's working."})
})

app.listen(port, ()=>{
    console.log("Server is running on port 3333")
})