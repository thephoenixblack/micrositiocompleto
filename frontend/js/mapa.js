const map = L.map('map').setView([40.41, -3.70], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

fetch(`${API}/libros/`)
    .then(r => r.json())
    .then(data => {
        data.forEach(l => {
            L.marker([l.lat, l.lng]).addTo(map)
                .bindPopup(`<b>${l.titulo}</b><br>${l.autor}`);
        });
    });