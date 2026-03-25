// Función para mostrar la sección seleccionada
function mostrarSeccion(seccion) {
    // Oculta todas las secciones (cambia "pantalla" por "seccion" que es el nombre usado en el HTML)
    document.querySelectorAll(".seccion").forEach(s => {
        s.classList.remove("activa");
    });
    // Muestra la sección seleccionada
    const seccionDestino = document.getElementById(seccion);
    if (seccionDestino) {
        seccionDestino.classList.add("activa");
    }
}

// Función para la acción de comprar (agregada para completar la funcionalidad)
function comprar(producto, precio) {
    alert(`Has seleccionado comprar: ${producto}\nPrecio: $${precio} MXN\n¡Gracias por tu compra!`);
}

// Función "volver" corregida (ajusta el identificador al usado en el HTML)
function volver() {
    document.querySelectorAll(".seccion").forEach(s => {
        s.classList.remove("activa");
    });
    // Muestra la sección de Inicio (en lugar de "menu" que no coincide con nuestros IDs)
    document.getElementById("INICIO").classList.add("activa");
}
