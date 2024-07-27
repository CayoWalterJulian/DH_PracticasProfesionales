//const { update } = require('../../controllers/aspirantController');

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize/types')DataTypes.} dataTypes
 */
module.exports = (sequelize, dataTypes) => {
    let alias = "Aspirant";  // esto debería estar en singular
    let cols = {
        DNI: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: false,
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false, // no permite null
        },
        lastname: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        phone: {
            type: dataTypes.STRING(20),
            allowNull: true,
            defaultValue: null,
        },
        linkedin: {
            type: dataTypes.STRING(100),
            allowNull: true,
            defaultValue: null,
        },
        birthdate: {
            type: dataTypes.DATE,
            allowNull: false,
        },
        gender: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        country_residence: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        profession: {
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        image: {
            type: dataTypes.STRING(200),
            allowNull: true,
            defaultValue: null,
        },
        study_level: {
            type: dataTypes.STRING(20),
            allowNull: false,
        },
        time_availibity: {
            type: dataTypes.STRING(20),
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

    Aspirant.associate = function (models) {
        Aspirant.hasMany(models.Area ,{
            as: "area",
            foreignKey: "id_area",
            otherKey: "DNI",
            timestamps: false
        }) 
    Aspirant.hasMany(models.Experience, {
        as: "experience",
        foreignKey: 'id_experience',
        otherKey: "DNI",
        timestamps: false
    });
    }
    


    return Aspirant;
};