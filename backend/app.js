const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const tableRoutes = require('./routes/table');

const app = express();

// Connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/table', tableRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur lancé: localhost:${PORT}`));