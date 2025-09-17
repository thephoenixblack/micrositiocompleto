const API_URL = "http://127.0.0.1:8000"; // Ajusta si usas otro puerto

export async function getBooks() {
    const response = await fetch(`${API_URL}/books/`);
    if (!response.ok) throw new Error("Error al obtener libros");
    return await response.json();
}

export async function getBook(id) {
    const response = await fetch(`${API_URL}/books/${id}/`);
    if (!response.ok) throw new Error("Error al obtener libro");
    return await response.json();
}

export async function sendContact(data) {
    const response = await fetch(`${API_URL}/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Error al enviar contacto");
    return await response.json();
}