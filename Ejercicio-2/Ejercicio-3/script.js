function calcularNota(){
    // Tomar los valores y convertirlos a número
    let nombre = document.getElementById('nombre').value;
    let nota1 = Number(document.getElementById('nota1').value);
    let nota2 = Number(document.getElementById('nota2').value);
    let nota3 = Number(document.getElementById('nota3').value);
    let caja = document.getElementById('resultado');

    // Validar que no falten datos
    if(!nombre || !nota1 || !nota2 || !nota3){
        caja.className = '';
        caja.innerHTML = 'Faltan datos. Escribe el nombre y las 3 notas.';
        return;
    }

    // Validar que las notas estén entre 0 y 5
    if(nota1 < 0 || nota1 > 5 || nota2 < 0 || nota2 > 5 || nota3 < 0 || nota3 > 5){
        caja.className = '';
        caja.innerHTML = 'Las notas deben estar entre 0.0 y 5.0.';
        return;
    }

    // Calcular el promedio
    let promedio = (nota1 + nota2 + nota3) / 3;
    let estado = '';

    // Decidir si aprueba o reprueba
    if(promedio >= 3.5){
        estado = 'APROBADO ✅';
        caja.className = 'aprobado';
    } else {
        estado = 'REPROBADO ❌';
        caja.className = 'reprobado';
    }

    // Mostrar todo en pantalla
    caja.innerHTML = 'Estudiante: ' + nombre + '<br>' +
                     'Nota definitiva: ' + promedio.toFixed(2) + '<br>' +
                     'Estado: ' + estado;
}
