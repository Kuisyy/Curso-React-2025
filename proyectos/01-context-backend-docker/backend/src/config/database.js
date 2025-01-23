import mongoose from "mongoose";

//funcion para conectar con bd de MongoDB(async)

export const connectDb = async () => {
    try {
        //Conecto con la DB;
        await  mongoose.connect(process.env.MONGODB_URL)
        .then(() => console.log('Connected!'));
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}