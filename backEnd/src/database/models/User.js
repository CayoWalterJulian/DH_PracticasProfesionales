module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        user_id: {
            type: dataTypes.INTEGER(5).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        rol: {
            type: dataTypes.STRING(50),
            allowNull: false
        }};
    let config = {
        timestamps: false,
        tableName: 'user' 
    }
    const User = sequelize.define(alias,cols,config);

    

    return User
};