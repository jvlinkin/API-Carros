import mongoose from "mongoose";

const Schema = mongoose.Schema;


const CarModel = new Schema({
  
  marca: String,//CITROEN
  modelo: String, //C3
  ano: Number, //2010
  preco: Number //8,500
},{
    timestamps: true
});

export default mongoose.model('Cars', CarModel);