// Cuando elijo producto se pone el precio solo
document.getElementById('producto').addEventListener('change', function(){
    document.getElementById('precio').value = this.value;
});

// Función para hacer todos los cálculos
function calcular(){
    // Tomar los valores y convertirlos a número
    let precio = Number(document.getElementById('precio').value);
    let cantidad = Number(document.getElementById('cantidad').value);
    let descuento = Number(document.getElementById('descuento').value);
    let caja = document.getElementById('resultado');

    // Validar que no falten datos
    if(!precio || !cantidad){
        caja.innerHTML = 'Faltan datos. Escribe el precio y la cantidad.';
        return;
    }

    // Validar que la cantidad sea mayor a cero
    if(cantidad <= 0){
        caja.innerHTML = 'La cantidad debe ser mayor que 0.';
        return;
    }

    // Hacer las cuentas
    let subtotal = precio * cantidad;
    let iva = subtotal * 0.19;
    let total = subtotal + iva;
    let descValor = 0;

    // Si hay descuento se resta
    if(descuento > 0){
        descValor = total * (descuento / 100);
        total = total - descValor;
    }

    // Mostrar todo en pantalla
    caja.innerHTML = 'Subtotal: $' + subtotal.toLocaleString() + '<br>' +
                     'IVA 19%: $' + iva.toLocaleString() + '<br>';
    if(descuento > 0){
        caja.innerHTML = caja.innerHTML + 'Descuento: $' + descValor.toLocaleString() + '<br>';
    }
    caja.innerHTML = caja.innerHTML + '<hr>' +
                     '<strong>Total a pagar: $' + total.toLocaleString() + '</strong>';
}
