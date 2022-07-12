//Ingresamos en un arreglo nuestros productos con su nombre y precio a fin de calcular el precio final de lista para la venta, para ello cargamos un array con los precios originales y le calculamos el iva para armar una lista de precios para nuestros clientes.

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}
//declaramos un array de nuestros productos para almacenar objetos

let productos = [];
productos.push(new Producto("Set Contenedor","3500"));
productos.push(new Producto("Alfombra Redonda","2500"));
productos.push(new Producto("Almohadon Tussor","2800"));
productos.push(new Producto("Palo de Amasar","1500"));

for ( let precio of productos ) {
    let precio_iva = precio.sumaIva();
}
//Me muestra el precio final con el iva incluido.
console.log("Precio de venta" , productos);

