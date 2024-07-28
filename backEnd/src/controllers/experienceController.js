const fs = require('fs'); 
const path = require('path');
const db = require('../database/models');
//const { validationResult } = require('express-validator');

const controller = {
    // Mostrar todas las experiencias
    index: (req, res) => {
        db.Experience.findAll()
            .then(function(experiences) {
                res.render('experienceViewPrueba', { experiences: experiences });
            })
          //.catch(function(error) {
                 //console.error('Error al obtener las experiencias:', error);
                //res.status(500).send('Error interno del servidor');
          //});
    },

    // Detalle - Detalle de una experiencia
    detail: (req, res) => {
        db.Experience.findByPk(req.params.id)
            .then(function(experience) {
                if (experience) {
                    res.render('experienceViewPruebaDetail', { experience: experience });
                } else {
                    res.status(404).send('Experiencia no encontrada');
                }
            })
            //.catch(function(error) {
                //console.error('Error al obtener la experiencia:', error);
                //res.status(500).send('Error interno del servidor');
            //});
    },

    // Crear - Formulario para crear una nueva experiencia
    /*create: (req, res) => {
        res.render('experienceCreatePrueba');
    },

    // Crear - Método para almacenar una nueva experiencia
    store: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Experience.create({
                position: req.body.position,
                company: req.body.company,
                description: req.body.description,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                dni_aspirant: req.body.dni_aspirant
            })
            .then(() => {
                res.redirect('/experiences');
            })
            .catch(function(error) {
                console.error('Error al guardar la experiencia:', error);
                res.status(500).send('Error interno del servidor');
            });
        } else {
            res.render('experienceCreatePrueba', {
                errors: errors.mapped(),
                oldData: req.body
            });
        }
    },

    // Editar - Formulario para editar una experiencia
    edit: (req, res) => {
        db.Experience.findByPk(req.params.id)
            .then(function(experience) {
                if (experience) {
                    res.render('experienceViewPruebaEdit', { experience: experience });
                } else {
                    res.status(404).send('Experiencia no encontrada');
                }
            })
            .catch(function(error) {
                console.error('Error al obtener la experiencia para editar:', error);
                res.status(500).send('Error interno del servidor');
            });
    },

    // Editar - Método para actualizar una experiencia
    update: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Experience.update({
                position: req.body.position,
                company: req.body.company,
                description: req.body.description,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                dni_aspirant: req.body.dni_aspirant
            }, {
                where: {
                    id_experience: req.params.id
                }
            })
            .then(() => {
                res.redirect('/experiences');
            })
            .catch(function(error) {
                console.error('Error al actualizar la experiencia:', error);
                res.status(500).send('Error interno del servidor');
            });
        } else {
            db.Experience.findByPk(req.params.id)
                .then(function(experience) {
                    res.render('experienceViewPruebaEdit', {
                        experience: experience,
                        errors: errors.mapped(),
                        oldData: req.body
                    });
                })
                .catch(function(error) {
                    console.error('Error al obtener la experiencia para mostrar errores:', error);
                    res.status(500).send('Error interno del servidor');
                });
        }
    },

    // Eliminar - Método para eliminar una experiencia
    destroy: (req, res) => {
        db.Experience.destroy({
            where: {
                id_experience: req.params.id
            }
        })
        .then(() => {
            res.redirect('/experiences');
        })
        .catch(function(error) {
            console.error('Error al eliminar la experiencia:', error);
            res.status(500).send('Error interno del servidor');
        });
    }*/
};

module.exports = controller;
