const path = require('path');
const db = require('../database/models');


const dataController = {
    'list': (req, res) => {
        db.Lenguage.findAll()
            .then(lenguage => {
                res.render('lenguageList.ejs', {lenguage})
            })
    }
}

module.exports = dataController;