const db = require('../../database/models');
const Aspirant = require('../../database/models/Aspirant');
const sequelize = db.sequelize;

const dataController = {

    list: async (req, res) => {
        try {
            const aspirant = await db.Aspirant.findAll();
            const countByCategory = {};          
            const response = {
                count: aspirant.length,
                aspirant: aspirant.map(aspirant => ({
                    DNItt: aspirant.DNI,
                    name: aspirant.name,
                    lastname: aspirant.lastname,
                    email: aspirant.email,
                    phone: aspirant.phone,
                    linkedin: `https://www.linkedin.com/${aspirant.linkedin}`,
                    birthdate: aspirant.birthday,
                    gender: aspirant.gender,
                    country: aspirant.country_residence,
                    profesion: aspirant.profession,
                    image: `${req.protocol}://${req.get('host')}/img/${aspirant.image}`,
                    study:aspirant.study_level,
                    cv: aspirant.CV,
                    time: aspirant.time_availibity
                })),
                status: 200
            };
            res.json(response)
        } catch (error) {
            console.error("Error al obtener la lista de aspirantes", error);
            res.status(500).json({error: "No se pudo obtener la lista de aspirantes"});
        }
    } ,
    /*
    'list': (req,res) => {
        db.Aspirant
            .findAll()
            .then(Aspirants => {
                return res.json({
                    total:Aspirants.length,
                    data: Aspirants,
                    status:200
                })
            })
    },*/
    'listByProfession': (req, res) => {
        console.log(req.params.profession);
        db.Aspirant.findAll({
            where: {
                profession: req.params.profession
            },
            order: [
                ['profession', 'ASC']
            ]
        })
        .then(aspirants => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: aspirants.length,
                    url: 'api/aspirants/:profession'
                },
                data:aspirants
            }
                res.json(respuesta);
        })
        .catch(error => console.log(error))
    }
}

module.exports = dataController;