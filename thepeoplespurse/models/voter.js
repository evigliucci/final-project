module.exports = function(sequelize, DataTypes) {
    var Voter = sequelize.define("Voter", {
        agriculture:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return Voter;
};