const mongoose = require('mongoose');
const User = require('../models/users');
const Joi = require('@hapi/joi');

exports.login = async (req, res) => {
    res.json({
        estado: "Iniciar sesión",
    });
};

exports.loginpost = async (req, res) => {
    res.json({
        estado: "Enviar datos de inicio de sesión",
    });
};

exports.register = async (req, res) => {
    res.json({
        estado: "Registrarse",
    });
};

exports.registerpost = async (req, res) => {
    const schemaAddUser = Joi.object({
        first_name: Joi.string().min(3).max(50).required().label('Nombre'),
        last_name: Joi.string().min(3).max(50).required(),
        doc_id: Joi.string().min(5).max(30).required(),
        phone: Joi.number().integer().min(100000).max(99999999).required().label('Teléfono'),
        email: Joi.string().min(6).max(100).required().email(),
        username: Joi.string().min(6).max(20).required(),
        password: Joi.string().min(6).max(1024).required()
    })    

    // validate user
    const { error } = schemaAddUser.validate(req.body)
   
    if (error) {
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }
    res.json({
        estado: "Usuario sin errores",
    });

};

exports.recover = async (req, res) => {
    res.json({
        estado: "Recuperar cuenta",
    });
};

exports.recoverpost = async (req, res) => {
    res.json({
        estado: "Enviar datos de recuperación",
    });
};
