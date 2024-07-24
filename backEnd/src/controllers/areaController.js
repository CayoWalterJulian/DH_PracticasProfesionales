const path = require('path');
const db = require('./../database/models');
const { Association } = require('sequelize');


const areaController = {
    "list": (req, res) => {
        db.Area.findAll()
            .then(area=> {
                res.render('area.ejs', {area})
            })
    }
}

module.exports = areaController;