module.exports = (sequelize, dataTypes) => {
<<<<<<< HEAD
    let alias = 'Area'; // esto debería estar en singular
=======
    let alias = 'Area';
>>>>>>> cec327ab3233e76be13e54e437361039fd006294
    let cols = {
        id_area: {
            type: dataTypes.INTEGER(5).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
<<<<<<< HEAD
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name_area: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'area' 
    }
    const Area = sequelize.define(alias,cols,config);
    Area.associate = function (models){
        Area.belongsTo(models.Aspirants, {
            as: "aspirante",
            foreignKey: "dni_aspirant"
        })
    }

    return Area;
=======
        name_area: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        dni_aspirant: {
            type: dataTypes.INTEGER(8),
            allowNull: false
    }};
    let config = {
        timestamps: false,
        tableName: 'area' 
    }
    const Area = sequelize.define(alias,cols,config);

    Area.associate = function (models) {
        Area.belongsTo(models.Aspirant ,{
            as: "aspirants",
            foreignKey: "dni_aspirant",
        }) 
    }

    return Area
>>>>>>> cec327ab3233e76be13e54e437361039fd006294
};