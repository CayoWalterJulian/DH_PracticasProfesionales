const db = require('../../database/models');
const sequelize = db.sequelize;

const dataController = {
    'list': (req,res) => {
        db.Area
            .findAll()
            .then(Areas => {
                return res.json({
                    total:Areas.length,
                    data: Areas,
                    status:200
                })
            })
    },
    'listByDNI': (req, res) => {
        db.Area.findAll({
            include: ['Aspirant'],
            where: {
                dni_aspirant: req.params.id
            },
            order:[
                ['name','DESC']
            ]
        })
        .then(Areas => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: movies.length,
                },
                data: Areas
            }
                res.json(respuesta);
            })
    },

}

module.exports = dataController;