import express from "express";
import cors from "cors";
import dotenv from "dotenv";

//Cargar dotenv
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//Conexion a la BD

//Rutas
//app.use("/auth",xxxxx)
//app.use("/user",xxxxx)

//Gestion de errores
app.use((err,req,res,next)=>{

    console.error(err.stack);
    
    res
        .status(500)
        .json({mensaje:err.message || "Error interno en el servidor"});
})
//Iniciar servevidor

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
})

