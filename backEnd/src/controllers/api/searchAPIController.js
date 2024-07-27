const db = require('../../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const dataController = {
    
    profession: async (req, res) => {
        const valor = req.body.profession;
        try {
            const profession = await db.Aspirant.findAll({
                attributes: ['profession'],
                where: Sequelize.where(
                    Sequelize.fn('LOWER', Sequelize.col('profession')),
                    {
                        [Op.like]: `%${valor.toLowerCase()}%`
                    }
                )
              });                            
            res.json(profession)
        } catch (error) {
            console.error("Error al obtener la lista de usuarios", error);
            res.status(500).json({error: "No se pudo obtener la lista de usuarios"});
        }
    }   
}

module.exports = dataController;