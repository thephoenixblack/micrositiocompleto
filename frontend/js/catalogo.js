// ========================
// Base de datos de libros
// ========================
const libros = [
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", genero: "clasico" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", genero: "clasico" },
    { titulo: "La Odisea", autor: "Homero", genero: "aventura" },
    { titulo: "Hamlet", autor: "William Shakespeare", genero: "drama" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen", genero: "romance" },
    { titulo: "Matar a un ruiseñor", autor: "Harper Lee", genero: "drama" },
    { titulo: "1984", autor: "George Orwell", genero: "distopia" },
    { titulo: "Los juegos del hambre", autor: "Suzanne Collins", genero: "distopia" },
    { titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling", genero: "fantasia" },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", genero: "fantasia" },
    { titulo: "Alicia en el país de las maravillas", autor: "Lewis Carroll", genero: "infantil" },
    { titulo: "Las crónicas de Narnia", autor: "C.S. Lewis", genero: "fantasia" },
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry", genero: "infantil" },
    { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", genero: "drama" },
    { titulo: "Rayuela", autor: "Julio Cortázar", genero: "clasico" },
    { titulo: "It", autor: "Stephen King", genero: "terror" },
    { titulo: "Drácula", autor: "Bram Stoker", genero: "terror" },
    { titulo: "Frankenstein", autor: "Mary Shelley", genero: "terror" },
    { titulo: "Crimen y castigo", autor: "Fiódor Dostoyevski", genero: "clasico" },
    { titulo: "Guerra y paz", autor: "León Tolstói", genero: "clasico" },
    { titulo: "Los miserables", autor: "Victor Hugo", genero: "clasico" },
    { titulo: "Fahrenheit 451", autor: "Ray Bradbury", genero: "distopia" },
    { titulo: "Ensayo sobre la ceguera", autor: "José Saramago", genero: "drama" },
    { titulo: "La divina comedia", autor: "Dante Alighieri", genero: "clasico" },
    { titulo: "El alquimista", autor: "Paulo Coelho", genero: "aventura" },
    { titulo: "Corazón", autor: "Edmondo de Amicis", genero: "infantil" },
    { titulo: "El retrato de Dorian Gray", autor: "Oscar Wilde", genero: "drama" },
    { titulo: "Bajo la misma estrella", autor: "John Green", genero: "romance" },
    { titulo: "Crepúsculo", autor: "Stephenie Meyer", genero: "romance" },
    { titulo: "Cazadores de sombras", autor: "Cassandra Clare", genero: "fantasia" }
];

// ========================
// Mostrar catálogo completo
// ========================
const catalogoDiv = document.getElementById("catalogo");

function mostrarCatalogo() {
    libros.forEach(libro => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <h3>${libro.titulo}</h3>
      <p><strong>Autor:</strong> ${libro.autor}</p>
      <p><strong>Género:</strong> ${libro.genero}</p>
    `;
        catalogoDiv.appendChild(card);
    });
}

mostrarCatalogo();

// ========================
// Recomendador básico
// ========================
const btnRecomendar = document.getElementById("btnRecomendar");
const generoSelect = document.getElementById("generoSelect");
const recomendacionesDiv = document.getElementById("recomendaciones");

btnRecomendar.addEventListener("click", () => {
    const genero = generoSelect.value;
    recomendacionesDiv.innerHTML = "";

    if (!genero) {
        recomendacionesDiv.innerHTML = "<p>⚠️ Por favor selecciona un género.</p>";
        return;
    }

    const sugerencias = libros.filter(libro => libro.genero === genero);

    if (sugerencias.length === 0) {
        recomendacionesDiv.innerHTML = `<p>🤖 No encontré recomendaciones para "${genero}".</p>`;
        return;
    }

    sugerencias.forEach(libro => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
      <h3>${libro.titulo}</h3>
      <p><strong>Autor:</strong> ${libro.autor}</p>
      <p><strong>Género:</strong> ${libro.genero}</p>
    `;
        recomendacionesDiv.appendChild(card);
    });
});