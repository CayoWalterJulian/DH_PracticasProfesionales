module.exports = (sequelize, dataTypes) => {
    let alias = 'Area';
    let cols = {
        id_area: {
            type: dataTypes.INTEGER(5).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
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
};