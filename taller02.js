// imprimir los numeros del 1 al 20 

// let numero =1
// while (numero<=20){
// console.log(numero);
// numero++;
// }

// imprimir los primeros 10 numeros pares 


//  imprimir los 10 primeros numeros pares
// y obtener la suma de ellos

// let numero = 1;
// let numeroPar = 2;
// let sumaPares = 0;

//  while (numero <= 10) {
//      console.log(numeroPar * numero);
//      sumaPares += (numeroPar * numero);
//      numero++;
//  }

//  console.log('Total suma: ' +sumaPares
// let sumatotal = 0;

// for (let numero = 1; numero <= 10; numero++) {
//     console.log(numero*2);
//      sumatotal += (numero * 2);
       
// }

// console.log(sumatotal);
// let reunion ={
//     titulo: 'Sesion Bootcamp JS',
//     fecha: '17-Dic-2020',
//     lugar: 'meetup',
//     participantes: [
//         'Andres',
//         'Carlos',
//         'Rafa',
//         'Mabel',
//         'Yuli'
        
//     ]
// };
// function serializar(reunion){
//     return JSON.stringify(reunion);
// }
// console.log(reunion);
// console.log(serializar(reunion));

let character = `
"height": "172",
 "mass": "77",
 "hair_color": "blond",
 "skin_color": "fair",
 "eye_color": "blue",
 "birth_year": "19BBY",
"gender": "male",
 "created": "2014-12-09T13:50:51.644000Z",
"edited": "2014-12-20T21:17:56.891000Z"
 `;
 function deserializar(character){
         return JSON.parse(character);
      }
     console.log(character);
     console.log(deserializar(character));

// let lista = [];
//  let listaTxt = [];

// let num = Number(prompt('Cuantos productos? '));

// for (let i = 0; i < num; i++) {
//     let producto = {};
//     producto.codigo = prompt('Codigo del producto? ');
//     producto.nombre = prompt('Nombre del producto? ');
//     producto.precio = Number(prompt('Precio del producto? '));
//     lista.push(producto);
// }

// console.log(lista);

// funcion que convierta cada objeto de la lista
// en su representacion de string
// JSON.stringify(obj)

// funcion que convierta cada objeto de la lista
// en su representacion de string
// JSON.stringify(obj)

function serializarLista(listaObj) {
    for (let obj of listaObj) {
        listaTxt.push(JSON.stringify(obj));
    }
}

serializarLista(lista);
console.log(listaTxt);












