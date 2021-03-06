
const empleados = 
[
{
    id:1,
    nombre: 'Fernando'
},
{
    id:2,
    nombre: 'Marta'
},
{
    id:3,
    nombre: 'Manuel'
},

]

const sueldos =
[
    {
        id:1,
        sueldo:1500,
    },
    {
        id:2,
        sueldo:2000,
    },
]

///metodos
const id=1;

const getSalarioById = (id, callback) =>
{
    const sueldo = sueldos.find((e)=>e.id===id);

    if(sueldo)
    {
        callback(null, sueldo)
        return;
    }
    callback(new Error(`El sueldo con id: ${id} no existe`))
};


getSalarioById(id, (error, sueldo)=>
    {
        if(error)
        {
        console.log(`ERROR!!!`);
        console.log(error);
        return;
        }
        console.log(`El empleado con id: ${sueldo.id} tiene un sueldo de: ${sueldo.sueldo}...`)
    }
    );


////////////////////////

const getEmpleadoById = (id, callback) =>
{
    const empleado = empleados.find((e)=>e.id===id);
    
    if(empleado)
    {
        callback(null, empleado);
        return;
    }
    callback(new Error(`El empleado no existe`));

}



getEmpleadoById(id, (error, empleado) => 
{
    if(error)
    {
        console.log(`ERROR!!!`);
        console.log(error);
        return;
    }
    console.log(`El empleado: ${empleado.nombre}...`)
    getSalarioById(id, (error, sueldo)=>
    {
        if(error)
        {
        console.log(`ERROR!!!`);
        console.log(error);
        return;
        }
        console.log(`El empleado: ${empleado.nombre} con id: ${sueldo.id} tiene un sueldo de: ${sueldo.sueldo}...`)
    })
});





