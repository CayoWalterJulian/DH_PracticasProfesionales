const { update } = require('../../controllers/aspirantController');

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize/types')DataTypes.} dataTypes
 */
module.exports = (sequelize, DataTypes) => {
    let alias = "Aspirant";  // esto debería estar en singular
    let cols = {
        DNI: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: false,
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false, // no permite null
        },
        lastname: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: true,
            defaultValue: null,
        },
        linkedin: {
            type: DataTypes.STRING(100),
            allowNull: true,
            defaultValue: null,
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        country_residence: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        profession: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING(200),
            allowNull: true,
            defaultValue: null,
        },
        study_level: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        CV: {
            type: DataTypes.STRING(200),
            allowNull: true,
            defaultValue: null,
        },
        time_availibity: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }        
    };
    let config = {
        tableName : "aspirant",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
    }

    const Aspirant = sequelize.define(alias, cols, config);

    /*User.associate = (models) => {
    User.hasMany(models.CompraCarrito, {
        as: "compracarrito",
        foreingKey: "user_id",
        otherKey: 'shopcart_id',
        timestamps: false
        })
    }  */


    // Aquí podrías definir asociaciones si existen
    // Por ejemplo, si un usuario puede tener muchas órdenes:
    // User.associate = (models) => {
    //     User.hasMany(models.Order, {
    //         as: "orders",
    //         foreignKey: "user_id"
    //     });
    // }


    return Aspirant;
};