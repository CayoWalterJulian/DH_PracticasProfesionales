module.exports = (sequelize, dataTypes) => {
    let alias = "Experience";  // esto debería estar en singular
    let cols = {
        id_experience: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        position: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        company: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dni_aspirant: {
            type: DataTypes.INTEGER,
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