require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const connectDB = require('./config/db');
const contactsRoutes = require('./routes/contactRoute');

const app = express();
const PORT = process.env.PORT || 3000;
;

// Conectar DB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Frontend
app.use(express.static(path.join(__dirname, '../public')));

// API
app.use('/api/contacts', contactsRoutes);

app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
