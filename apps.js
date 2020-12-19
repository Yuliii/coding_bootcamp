// Constuir un programa que imprima en consola los primeros 10 numeros pares.
let nombreUsuario = prompt('Ingrese su nombre de usuario');

if (nombreUsuario === 'Admin') {
    let clave = prompt('Ingrese su clave: ');
    if (clave === 'TheMaster') {
        console.log('Bienvenido');
    } else if (clave === '' || clave === null) {
        console.log('Cancelado por el usuario');
    } else {
        console.log('Contraseña errada');
    }
} else if (nombreUsuario === '' || nombreUsuario === nu