module.exports = (sequelize, dataTypes) => {
    let alias = 'Area'; // esto debería estar en singular
    let cols = {
        id_area: {
            type: dataTypes.INTEGER(5).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
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
};