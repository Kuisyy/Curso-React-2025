
const isAuthenticated = ()=>{
    return localStorage.getItem("token") ? true : false;
}

export default isAuthenticated;