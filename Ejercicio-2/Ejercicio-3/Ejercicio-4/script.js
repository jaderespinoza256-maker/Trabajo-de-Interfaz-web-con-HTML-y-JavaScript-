// Arreglo para guardar los productos
let inventario = [];

// Función para agregar producto
function agregarProducto(){
    // Tomar los valores y convertirlos
    let nombre = document.getElementById('nombre').value;
    let precio = Number(document.getElementById('precio').value);
    let cantidad = Number(document.getElementById('cantidad').value);
    let categoria = document.getElementById('categoria').value;

    // Validar que no falten datos
    if(!nombre || !precio || !cantidad || !categoria){
        alert('Completa todos los campos.');
        return;
    }

    // Validar que precio y cantidad sean mayores a 0
    if(precio <= 0 || cantidad <= 0){
        alert('Precio y cantidad deben ser mayores a 0.');
        return;
    }

    // Calcular valor total del producto
    let valorTotal = precio * cantidad;

    // Guardar como objeto en el arreglo
    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        categoria: categoria,
        valorTotal: valorTotal
    };
    inventario.push(producto);

    // Limpiar los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('cantidad').value = '';
    document.getElementById('categoria').value = '';

    // Actualizar la tabla y los totales
    actualizarTabla();
    actualizarTotales();
}

// Función para mostrar la tabla
function actualizarTabla(){
    let cuerpo = document.getElementById('cuerpoTabla');
    cuerpo.innerHTML = ''; // Borrar lo que tenga

    // Recorrer el arreglo y crear filas
    for(let i = 0; i < inventario.length; i++){
        let fila = document.createElement('tr');

        // Celda nombre
        let celdaNombre = document.createElement('td');
        celdaNombre.textContent = inventario[i].nombre;
        fila.appendChild(celdaNombre);

        // Celda precio
        let celdaPrecio = document.createElement('td');
        celdaPrecio.textContent = '$' + inventario[i].precio.toLocaleString();
        fila.appendChild(celdaPrecio);

        // Celda cantidad
        let celdaCantidad = document.createElement('td');
        celdaCantidad.textContent = inventario[i].cantidad;
        fila.appendChild(celdaCantidad);

        // Celda valor total
        let celdaTotal = document.createElement('td');
        celdaTotal.textContent = '$' + inventario[i].valorTotal.toLocaleString();
        fila.appendChild(celdaTotal);

        // Celda botón eliminar
        let celdaEliminar = document.createElement('td');
        let boton = document.createElement('button');
        boton.textContent = 'Eliminar';
        boton.className = 'eliminar';
        boton.onclick = (function(pos){
            return function(){
                inventario.splice(pos, 1);
                actualizarTabla();
                actualizarTotales();
            };
        })(i);
        celdaEliminar.appendChild(boton);
        fila.appendChild(celdaEliminar);

        // Agregar la fila a la tabla
        cuerpo.appendChild(fila);
    }
}

// Función para calcular y mostrar los totales
function actualizarTotales(){
    let totalProductos = inventario.length;
    let sumaValor = 0;

    for(let i = 0; i < inventario.length; i++){
        sumaValor = sumaValor + inventario[i].valorTotal;
    }

    document.getElementById('totalCantidad').textContent = totalProductos;
    document.getElementById('totalValor').textContent = sumaValor.toLocaleString();
}
