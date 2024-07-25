module.exports = (sequelize, DataTypes) => {
    let alias = "Experience";  // esto debería estar en singular
    let cols = {
        id_experience: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        company: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        start_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        dni_aspirant: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName : "experience",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
    }
    const Experience = sequelize.define(alias, cols, config);
    // Definir las asociaciones con otros modelos si es necesario
    Experience.associate = function(models) {
        // Ejemplo de asociación con el modelo Aspirant (ejemplo hipotético)
        Experience.belongsTo(models.Aspirant, {
            foreignKey: 'dni_aspirant',
            as: 'aspirant'
        });
    };

    return Experience;
};