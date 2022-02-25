//requiriendo modulos
const express = require('express');
const authRoutes = require('./routes/authRoutes');

require('./database');
//require('dotenv').config();

//const mongoose = require('mongoose');
const bodyparser = require('body-parser');
require('dotenv').config()

const app = express();

// capturar body
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Conexión a Base de datos

// import routes 

// route middlewares

// routes

app.use('/api/users', authRoutes);

// iniciar server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})