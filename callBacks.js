/*
setTimeout(() => {
    console.log('Hola mundo2');
}, 2000);

const saludar = () =>
{
    console.log("Hola mundo");
}

setTimeout(saludar, 4000);
*/


/*
const getUsuarioById = (id) => 
{
    const user =
    {
        id,
        nombre: 'Fernando'
    }
    setTimeout(() => {console.log(user.nombre);return user}, 4000);
    //return 0;
}

getUsuarioById(10);
const usuario = getUsuarioById(10);
console.log(usuario)
*/

///////callback


const getUsuarioById = (id, callback) => 
{
    const user =
    {
        id,
        nombre: 'Fernando'
    }
    setTimeout(() => 
    {
        callback(user)
        return user
    }, 1000);
    
}

const imprimirUsuario = (usuario)=>
{
    console.log(usuario.nombre)
}

getUsuarioById(10, imprimirUsuario);


