
function sumar(a,b)
{
    console.log("a")
    return a + b;
}

console.log(sumar(10,20));

sumar = (a , b ) => { console.log("b");return a + b;}

console.log(sumar(10,20));


//DESTRUCTURACION

const personaje =
{
    nombre: 'Pepe',
    apellido: 'Argento',
    profesion: 'Zapatero',
    edad: 55,
    getDescription()
    {
        return `${nombre} ${apellido} es ${profesion}`
    }
}

//const {nombre, apellido, profesion, edad = 33} = personaje;

const imprimirPersonaje = ({nombre, apellido, profesion, edad = 50}) => 
{
    console.log(nombre, apellido, profesion, edad);
}

imprimirPersonaje(personaje);
imprimirPersonaje({nombre:'pp', apellido:'ARG',profesion:'zapatero', edad:51});
imprimirPersonaje({nom:'pp', apell:'ARG',prof:'zapatero', e:51, nombre:'OK'});

////////////////arrays

const personajes = ['Pepe','Moni','Koki','Paola'];

//const [p1,p2,p3,p4] = personajes;
const [p1,,,p4] = personajes;
//console.log(p1,p2,p3,p4);
console.log(p4);
console.log([,,,,, p4,p1]);
const reves = [p4,p1]
console.log(p1, p4)
console.log(reves)
