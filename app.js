// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre válido.');
        return;
    }
    
    // Agregar el nombre al array y limpiar el campo
    amigos.push(nombre);
    input.value = '';
    input.focus(); // Para facilitar la entrada del siguiente nombre
    
    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    
    // Agregar cada amigo como un elemento de lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item'; // Puedes usar esta clase para estilizar
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultado anterior
    
    // Validar que hay amigos en la lista
    if (amigos.length === 0) {
        const mensaje = document.createElement('li');
        mensaje.textContent = 'No hay amigos en la lista para sortear.';
        mensaje.className = 'result-item error';
        resultado.appendChild(mensaje);
        return;
    }
    
    // Validar si solo hay un amigo
    if (amigos.length === 1) {
        const mensaje = document.createElement('li');
        mensaje.textContent = `Solo hay un amigo en la lista: ${amigos[0]}`;
        mensaje.className = 'result-item';
        resultado.appendChild(mensaje);
        return;
    }
    
    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    const resultadoItem = document.createElement('li');
    resultadoItem.innerHTML = `🎉 ¡El amigo secreto es: <strong>${amigoSecreto}</strong>! 🎉`;
    resultadoItem.className = 'result-item highlight';
    resultado.appendChild(resultadoItem);
    
    // Opcional: reproducir efecto de sorteo
    efectoSorteo();
}

// Función opcional para efecto visual durante el sorteo
function efectoSorteo() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '<li class="result-item">Sorteando...</li>';
    
    // Pequeña animación antes de mostrar el resultado
    setTimeout(() => {
        // El resultado real se muestra en la función sortearAmigo
    }, 1000);
}

// Event listener para tecla Enter en el input
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('amigo');
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            agregarAmigo();
        }
    });
});