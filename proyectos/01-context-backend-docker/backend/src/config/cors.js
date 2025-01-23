export const corsOptions ={
    origin:process.env.FRONTEND_URL,//URL permitidas
    method:["GET","POST","PUT","DELETE"],//metodos permitidos
    allowedHeaders:["Content-Type","Authorization"],//cabeceras permitidas
    credentials:true,//Permitir envio de cookies y headers en la authentication

}