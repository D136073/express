const express = require('express');
const app = express();
const port = 3000;

// Ruta 1: Página de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express! Esto es la página de inicio.');
});

// Ruta 2: Página Acerca de
app.get('/acerca-de', (req, res) => {
  res.send('Esta es la página "Acerca de nosotros".');
});

// Ruta 3: Página de contacto
app.get('/contacto', (req, res) => {
  res.send('Puedes contactarnos en contact@example.com');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
