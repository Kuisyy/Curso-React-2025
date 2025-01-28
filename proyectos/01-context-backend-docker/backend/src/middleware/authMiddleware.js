import jwt from "jsonwebtoken";

//Proteger rutas
export const auth = ((req,res,next)=>{
    try {
        //extraemos de la parte del token Bearer
        const token = req.header("Authoritazion"?.replace("Bearer ",""));
        if(!token){
            res.status(401).json({mensaje:"Token no proporcionado"});
        };

        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        //añadimos el id del usr del usuario al objeto request 
        req.userId = decoded.userId;
        if(!token){
            res.status(401).json({mensaje:"Debes autenticarte para continuar"});
        };

        next();

    } catch (error) {
        console.error("Error en el authMiddleware: ",error);
    }
})