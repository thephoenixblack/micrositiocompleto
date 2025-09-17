import { getBook } from "./api.js";

document.addEventListener("DOMContentLoaded", async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const container = document.getElementById("detalle-libro");

    if (!id) {
        container.innerHTML = "<p>Libro no encontrado.</p>";
        return;
    }

    try {
        const libro = await getBook(id);

        container.innerHTML = `
      <div class="card">
        <h2>${libro.titulo}</h2>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Año:</strong> ${libro.anio}</p>
        <p><strong>Descripción:</strong> ${libro.descripcion}</p>
        <a href="catalogo.html" class="btn">⬅ Volver al catálogo</a>
      </div>
    `;
    } catch (error) {
        container.innerHTML = "<p>Error al cargar el libro.</p>";
        console.error(error);
    }
});