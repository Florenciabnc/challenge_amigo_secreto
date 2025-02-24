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