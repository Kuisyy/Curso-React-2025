const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Importa la conexión a MongoDB
const pokemonRoutes = require('./routes/pokemonRoutes'); // Importa las rutas

const app = express();

// Conectar a MongoDB
connectDB();

// Middleware
app.use(express.json()); // Para manejar JSON en las solicitudes
app.use(cors());

// Rutas
app.use('/api', pokemonRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('🔥 Servidor de la PokeAPI corriendo correctamente 🔥');
});

// Iniciar servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
