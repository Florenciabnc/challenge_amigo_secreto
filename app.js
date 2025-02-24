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

function recorrerAmigo() {
    let lista = document.getElementById('ListaAmigos');
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); 
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No se encontraron amigos para el sorteo")
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    let amigoSeleccionado = amigos[indiceAleatorio];
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `¡El amigo secreto es ${amigoSeleccionado}!`
}