function registrar() {
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let correo = document.getElementById('correo').value;
    let ciudad = document.getElementById('ciudad').value;
    let resultado = document.getElementById('resultado');

    if (nombre === '' || edad === '' || correo === '' || ciudad === '') {
        resultado.innerHTML = '<span class="icono-exito">⚠</span><span>Completa todos los campos.</span>';
        return;
    }
    resultado.innerHTML = '<span class="icono-exito">✓</span><span>Hola, ' + nombre + '. Tienes ' + edad + ' años y vives en ' + ciudad + '.<br>Tu correo es ' + correo + '.</span>';
}
