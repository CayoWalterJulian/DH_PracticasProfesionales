const path = require('path');
const db = require('./../database/models');
const { where } = require('sequelize');



const areaController = {
    list: (req, res) => {
        db.Area.findAll()
            .then(area=> {
                res.render('area.ejs', {area})
            })
    },
    create: (req ,res) =>{
        db.Area.findAll()
            .then(area=> {
                res.render('createArea.ejs')
            })
    },
    save: (req ,res) =>{
        db.Area.create({
            name_area: req.body.area,
            dni_aspirant: req.body.dni
        })
        res.redirect ("/area")
    },
    edit: (req ,res) =>{
        db.Area.findByPk(req.body.id)
            .then(area=> {
                res.render('editArea.ejs', {area : area})
            })

    },
    delete: (req ,res) =>{
        db.Area.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect ("/area")
        }
    }
module.exports = areaController;