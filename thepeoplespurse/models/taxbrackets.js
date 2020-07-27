module.exports = function (sequelize, DataTypes) {
    const taxbrackets = sequelize.define("taxbrackets", {
        totalVotes: {
            type: DataTypes.INTEGER
        },
        tax1: {
            type: DataTypes.INTEGER
        },
        tax2: {
            type: DataTypes.INTEGER
        },
        tax3: {
            type: DataTypes.INTEGER
        },
        tax4: {
            type: DataTypes.INTEGER
        },
        tax5: {
            type: DataTypes.INTEGER
        },
        tax6: {
            type: DataTypes.INTEGER
        },
        tax7: {
            type: DataTypes.INTEGER
        }
    })
    taxbrackets.associate = function(models) {
        taxbrackets.hasMany(models.depts)
    }
}