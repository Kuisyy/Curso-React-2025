import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


const RegistrarFormulario = ()=>{
    const stateInitial = {
        nombre: '',
        email: '',
        password: ''
    };

    const [formData, setFormData] = useState(stateInitial);

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!formData.nombre.trim() || !formData.email.trim() || !formData.password.trim()){
            console.log("Datos incompletos");
            toast.error("Datos incompletos")
            return;
        }
        console.log("Datos introducidos correctamente");
        toast.success("Datos completos");
        console.log(formData.nombre,formData.email,formData.password);
        setFormData(stateInitial);
    }

    const handlerInputChangue = (e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })

    }

    return(
        <div className="max w-md mx-auto p-6">
            <ToastContainer />
            <form className="p-6 bg-white shadow-lg rounded-lg" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold text-center text-gray-700 mb-4">Registrar Usuario</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Nombre</label>
                    <input 
                    type="text" 
                    name="nombre" 
                    value={formData.nombre} 
                    onChange={handlerInputChangue} 
                    className="w-full px-3 py-3 border rounded-lg" 
                    placeholder="Ingrese su nombre"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    value={formData.email}                     
                    onChange={handlerInputChangue} 
                    className="w-full px-3 py-3 border rounded-lg" 
                    placeholder="Ingrese su email"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">Password</label>
                    <input 
                    type="password" 
                    name="password" 
                    value={formData.password}                     
                    onChange={handlerInputChangue} 
                    className="w-full px-3 py-3 border rounded-lg" 
                    placeholder="Ingrese su password"/>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 ">Enviar</button>
            </form>
        </div>
        
    );
};

export default RegistrarFormulario;