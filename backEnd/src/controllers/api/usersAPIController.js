const db = require('../../database/models');
const user = require('../../database/models/user');
const sequelize = db.sequelize;

const dataController = {
    list: async (req, res) => {
        try {
            const user = await db.user.findAll();
            const countByCategory = {};          
            const response = {
                count: user.length,
                user: user.map(user => ({
                    email: user.email,
                    password: user.password,
                    rol: user.rol
                })),
                status: 200
            };
            res.json(response)
        } catch (error) {
            console.error("Error al obtener la lista usuarios", error);
            res.status(500).json({error: "No se pudo obtener la lista de usuarios"});
        }
    }
}
    module.exports = dataController;