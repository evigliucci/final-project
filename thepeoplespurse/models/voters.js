module.exports = function (sequelize, DataTypes) {
    var Voter = sequelize.define("Voter", {
        tax_bracket: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    //Voter association
    Voter.associate = function (models) {
        Voter.hasOne(models.Vote);
    }

    return Voter;
};