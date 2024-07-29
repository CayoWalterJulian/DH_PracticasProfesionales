const db = require('../../database/models');
const Aspirant = require('../../database/models/Aspirant');
const sequelize = db.sequelize;

const dataController = {

    // List all aspirants
    list: async (req, res) => {
        try {
            const aspirants = await db.Aspirant.findAll();
            const response = {
                count: aspirants.length,
                aspirant: aspirants.map(aspirant => ({
                    DNI: aspirant.DNI,
                    name: aspirant.name,
                    lastname: aspirant.lastname,
                    email: aspirant.email,
                    phone: aspirant.phone,
                    linkedin: `https://www.linkedin.com/${aspirant.linkedin}`,
                    birthdate: aspirant.birthdate,
                    gender: aspirant.gender,
                    country: aspirant.country_residence,
                    profession: aspirant.profession,
                    image: `${req.protocol}://${req.get('host')}/img/aspirants/${aspirant.image}`,
                    study: aspirant.study_level,
                    time: aspirant.time_availibity
                })),
                status: 200
            };
            res.json(response);
        } catch (error) {

            console.error("Error fetching aspirants", error);
            res.status(500).json({ error: "Internal server error" });
        }
    },
    // List aspirants by profession (incorrect usage in your case)
    listByProfession: (req, res) => {
        console.log(req.params.profession);
        db.Aspirant.findAll({
            where: {
                profession: req.params.profession
            },
            order: [['profession', 'ASC']]
        })
        .then(aspirants => {
            let response = {
                meta: {
                    status: 200,
                    total: aspirants.length,
                    url: 'api/aspirants/:profession'
                },
                data: aspirants
            };
            res.json(response);
        })
        .catch(error => {
            console.error("Error fetching aspirants by profession", error);
            res.status(500).json({ error: "Internal server error" });
        });
    },
    // Get aspirant by DNI
    getByDNI: (req, res) => {
        const { DNI } = req.params;
        db.Aspirant.findOne({
            where: { DNI: DNI }
        })
        .then(aspirant => {
            if (aspirant) {
                res.json({
                    aspirant: {
                        DNI: aspirant.DNI,
                        name: aspirant.name,
                        lastname: aspirant.lastname,
                        email: aspirant.email,
                        phone: aspirant.phone,
                        linkedin: `https://www.linkedin.com/${aspirant.linkedin}`,
                        birthdate: aspirant.birthdate,
                        gender: aspirant.gender,
                        country: aspirant.country_residence,
                        profession: aspirant.profession,
                        image: `${req.protocol}://${req.get('host')}/img/aspirants/${aspirant.image}`,
                        study: aspirant.study_level,
                        cv: aspirant.CV,
                        time: aspirant.time_availibity
                    }
                });
            } else {
                res.status(404).json({ error: 'Aspirant not found' });
            }
        })
        .catch(error => {
            console.error("Error fetching aspirant by DNI", error);
            res.status(500).json({ error: "Internal server error" });
        });
    }

}


module.exports = dataController;