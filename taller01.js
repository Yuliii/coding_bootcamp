// producto obj
// producto {codigo, nombre, precio}
// n productos .... array

let n = Number(prompt('Cuantos productos: ?'));

let lista = [];

for (let i = 0; i < n; i++) {
    let producto = {};
    producto.codigo = prompt('Codigo del producto: ?');
    producto.nombre = prompt('Nombre del producto: ?');
    producto.precio = Number(prompt('Precio del producto: ?'));
    lista.push(producto);
}

console.log(lista);
