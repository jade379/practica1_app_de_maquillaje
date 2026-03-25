function mostrarSeccion(seccion){

document.querySelectorAll(".pantalla").forEach(p => {
p.classList.remove("activa");
});

document.getElementById(seccion).classList.add("activa");

}

function volver(){

document.querySelectorAll(".pantalla").forEach(p => {
p.classList.remove("activa");
});

document.getElementById("menu").classList.add("activa");

}
