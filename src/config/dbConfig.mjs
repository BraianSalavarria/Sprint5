import mongoose from "mongoose";


const DB_URL=process.env.DB_URL

export async function connectDB() {
    try{
        await mongoose.connect(DB_URL);
        console.log('coneccion a la base de datos exitosa');
    }catch (error){
        console.error("error al conectar mongo db", error);
        process.exit(1);
    }
}