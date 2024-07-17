module.exports = (sequelize, dataTypes) => {
    let alias = 'Lenguage'; // esto debería estar en singular
    let cols = {
        id_lenguage: {
            type: dataTypes.INTEGER(5).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        // created_at: dataTypes.TIMESTAMP,
        // updated_at: dataTypes.TIMESTAMP,
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        timestamps: false,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false,
        tableName: 'lenguage' 
    }
    const Lenguage = sequelize.define(alias,cols,config);

    return Lenguage
};