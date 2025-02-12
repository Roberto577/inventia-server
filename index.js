const express = require('express');
const PORT = 3000;
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json());

// Importar las rutas
const authRoutes = require('./routes/authRoutes');
const usuariosRoutes = require('./routes/usuariosRoutes');
const productosRoutes = require('./routes/productosRoutes');
const productosBodegaRoutes = require('./routes/productosBodegaRoutes');
const preciosRoutes = require('./routes/preciosRoutes');
const vencimientoRoutes = require('./routes/fechaVencimientoRoutes');
const movimientoInventarioRoutes = require('./routes/movimientoInventarioRoutes');
const negociosRoutes = require('./routes/negociosRoutes');
const bodegasRoutes = require('./routes/bodegasRoutes');

// Usar las rutas
app.use('/api/auth', authRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/productosBodega', productosBodegaRoutes);
app.use('/api/precios', preciosRoutes);
app.use('/api/vencimientos', vencimientoRoutes);
app.use('/api/movimiento', movimientoInventarioRoutes);
app.use('/api/negocios', negociosRoutes);
app.use('/api/bodegas', bodegasRoutes);

// Rutas
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});