module.exports = function(sequelize, DataTypes) {
    var Vote = sequelize.define("Vote", {
        tax_bracket:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Vote.associate = function (models) {
        Voter.belongsTo(models.Vote);
        Vote.belongsTo(models.Budget);
    }
    return Vote;
};