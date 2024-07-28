const path = require('path');
const db = require('./../database/models');
const { Association } = require('sequelize');




const areaController = {
    list: (req, res) => {
        db.Area.findAll()
            .then(area=> {
                res.render('area.ejs', {area})
            })
    },
    detail: (req, res) =>{
        db.Area.findByPk(req.params.id_area/*, {
            include: [{Association: "aspirants"}]
        }*/)
        .then(function(area) {
            res.render ("areaDetail.ejs", {area:area})
        })
    },

    create: (req ,res) =>{
        db.Area.findAll()
            .then(area=> {
                res.render('areaCreate.ejs')
            })
            
    },
    save: (req ,res) =>{
        db.Area.create({
            name_area: req.body.name_area,
            dni_aspirant: req.body.dni
        }).then(() =>
            res.redirect('/area'));
    },
    edit: (req ,res) =>{
        db.Area.findByPk(req.params.id_area)
            .then(area=> {

                res.render('areaEdit.ejs', {area : area})
            })

    },
    update: (req, res) =>{
        db.Area.update({
            name_area: req.body.name_area
        },{
            where:{
                id_area : req.params.id_area
            }
        })
        res.redirect ("/area")
    }
    }
module.exports = areaController;