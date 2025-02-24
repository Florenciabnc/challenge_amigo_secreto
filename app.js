let amigos = [];

function agregarAmigo() {
    let nombreUsuario = document.getElementById('amigo').value;
    console.log(nombreUsuario);
    if (nombreUsuario == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(nombreUsuario);
        document.getElementById('amigo').value = "";
    }
    console.log(amigos);
}