
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

    if (nombre) {
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
        actualizarListaAmigos();
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = '';

    amigos.forEach(function(amigo, index) {
        let listItem = document.createElement('li');
        listItem.textContent = amigo;
        let buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Eliminar';
        buttonRemove.onclick = function() {
            eliminarAmigo(index);
        };
        listItem.appendChild(buttonRemove);
        lista.appendChild(listItem);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[indiceAleatorio];
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
    } else {
        alert('Por favor, añade al menos un amigo a la lista.');
    }
}





