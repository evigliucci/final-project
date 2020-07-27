module.exports = function(sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
        agriculture:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Budget;
};