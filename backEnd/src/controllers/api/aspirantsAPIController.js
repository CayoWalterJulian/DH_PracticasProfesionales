const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const dataController = {
    list: async (req, res) => {
        try {
            const aspirant = await db.Aspirant.findAll();
            const countByCategory = {};          
            const response = {
                count: aspirant.length,
                aspirant: aspirant.map(aspirant => ({
                    DNI: aspirant.DNI,
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
            console.error("Error al obtener la lista de productos", error);
            res.status(500).json({error: "No se pudo obtener la lista de productos"});
        }

    }
    
}

module.exports = dataController;