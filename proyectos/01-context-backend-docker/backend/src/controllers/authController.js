

//Funcion para controlar de forma asincrona los middleware de auth
//fn-> funcion controladora
//retorna una funcon de tipo middleware
//Promise.resolve() envuelve para garnatizar que se resuelva la promesa
const catchAsync = (fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next);
};

export const register = catchAsync (async(req,res)=>{
    //destructuruning del body para datos
    const { email, password }= req.body;
    //validamos email y pass
    await AuthService.register(email,password);
    //Mensaje de exitos
    res.status(201).json({message:"Usuario encontrado con exito"});
})


const login = ()=>{

};