const path = require('path');
const db = require('./../database/models');



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
        db.Area.findAll()
            .then(area=> {
                res.render('createArea.ejs')
            })/*////////*/
    },
    edit: (req ,res) =>{
        db.Area.findAll()
            .then(area=> {
                res.render('createArea.ejs')
            })
    },
    delete: (req ,res) =>{
        db.Area.findAll()
            .then(area=> {
                res.render('createArea.ejs')
            })
    }
}

module.exports = areaController;