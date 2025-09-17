// ==========================
// IA simulada para recomendar libros
// ==========================

const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "clasico" },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", genero: "fantasia" },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", genero: "fantasia" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen", genero: "romance" },
    { titulo: "Drácula", autor: "Bram Stoker", genero: "terror" },
    { titulo: "It", autor: "Stephen King", genero: "terror" },
    { titulo: "Los juegos del hambre", autor: "Suzanne Collins", genero: "distopia" },
    { titulo: "Alicia en el país de las maravillas", autor: "Lewis Carroll", genero: "infantil" },
    { titulo: "La Odisea", autor: "Homero", genero: "aventura" },
    { titulo: "Hamlet", autor: "William Shakespeare", genero: "drama" }
];

// Obtener elementos
const input = document.getElementById("preguntaLibro");
const boton = document.getElementById("buscarLibro");
const respuesta = document.getElementById("respuestaIA");

// Función recomendador IA
function recomendarIA() {
    const genero = input.value.trim().toLowerCase();
    respuesta.innerHTML = "";

    if (!genero) {
        respuesta.innerHTML = "<p>⚠️ Por favor escribe un género.</p>";
        return;
    }

    // Buscar libros por género
    const sugerencias = libros.filter(libro => libro.genero.includes(genero));

    if (sugerencias.length === 0) {
        respuesta.innerHTML = `<p>🤖 Lo siento, no encontré recomendaciones para el género "${genero}".</p>`;
        return;
    }

    // Mostrar resultados
    sugerencias.forEach(libro => {
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
      <h3>${libro.titulo}</h3>
      <p><strong>Autor:</strong> ${libro.autor}</p>
      <p><strong>Género:</strong> ${libro.genero}</p>
    `;
        respuesta.appendChild(div);
    });
}

// Evento
if (boton) {
    boton.addEventListener("click", recomendarIA);
}