<<<<<<< HEAD
=======
const fs = require('fs'); 
>>>>>>> cec327ab3233e76be13e54e437361039fd006294
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