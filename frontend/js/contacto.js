import { sendContact } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contacto");
    const respuesta = document.getElementById("respuesta");

    form.addEventListener("submit", async(e) => {
        e.preventDefault();

        const data = {
            nombre: document.getElementById("nombre").value,
            email: document.getElementById("email").value,
            mensaje: document.getElementById("mensaje").value,
        };

        try {
            const result = await sendContact(data);
            respuesta.textContent = "✅ Mensaje enviado correctamente.";
            respuesta.style.color = "green";
            form.reset();
        } catch (error) {
            console.error(error);
            respuesta.textContent = "❌ Error al enviar el mensaje.";
            respuesta.style.color = "red";
        }
    });
});