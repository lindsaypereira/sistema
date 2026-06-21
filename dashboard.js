function mostrarSeccion(id) {

    let secciones = document.querySelectorAll(".seccion");

    secciones.forEach(function(seccion) {
        seccion.style.display = "none";
    });

    document.getElementById(id).style.display = "block";
}