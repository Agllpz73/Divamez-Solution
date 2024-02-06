// Dirección a geocodificar
const address = "Brooklyn Center, Minnesota 55443";

// Configuración del mapa
const map = L.map('map').setView([0, 0], 12);

// Capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Utilizar el servicio de geocodificación de OpenStreetMap
const geocodeURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

fetch(geocodeURL)
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
      const { lat, lon } = data[0];
      map.setView([lat, lon], 12);

      // Marcador en la ubicación geocodificada
      const marker = L.marker([lat, lon]).addTo(map);

      // Popup asociado al marcador
      marker.bindPopup(address).openPopup();
    } else {
      console.error("No se encontraron resultados de geocodificación.");
    }
  })
  .catch(error => {
    console.error("Error al realizar la geocodificación:", error);
  });