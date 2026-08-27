function registrar() {

    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let ciudad = document.getElementById("ciudad").value;

    if (nombre == "" || edad == "" || correo == "" || ciudad == "") {

        document.getElementById("resultado").innerHTML =
            "Por favor, complete todos los campos.";

    } else {

        document.getElementById("resultado").innerHTML =
            "Hola, " + nombre + ". Tienes " + edad +
            " años y vives en " + ciudad +
            ". Tu correo es " + correo + ".";
    }
}

document.getElementById("formularioRegistro").addEventListener("submit", function(event) {

    event.preventDefault();

    registrar();

});
