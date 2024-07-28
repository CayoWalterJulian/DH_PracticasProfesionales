const db = require('../../database/models');
const sequelize = db.sequelize;

const dataController = {
    
    list: async (req, res) => {
        try {
            const profession = await db.Aspirant.findAll({
                attributes: ['profession']
              });          
            const response = {
                count: profession.length,
                profession: profession.map(aspirant => ( aspirant.profession)),
                status: 200
            };         
            res.json(response)
        } catch (error) {
            console.error("Error al obtener la lista de profesiones", error);
            res.status(500).json({error: "No se pudo obtener la lista de profesiones"});
        }
    }   
}

module.exports = dataController;