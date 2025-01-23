

//Funcion para controlar de forma asincrona los middleware de auth
//fn-> funcion controladora
//retorna una funcon de tipo middleware
//Promise.resolve() envuelve para garnatizar que se resuelva la promesa
const catchAsync = (fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next);
};

const register = ()=>{
    
};


const login = ()=>{

};