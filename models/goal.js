module.exports = function(sequelize, DataTypes) {
	var Goal = sequelize.define("Goal", {
		goalName: DataTypes.STRING,
		goalDeadline: DataTypes.DATEONLY,
		goalStatus: DataTypes.JSON,
    goalText: DataTypes.STRING,
		comments: {type: DataTypes.TEXT, allowNull: true},
    isReal: DataTypes.BOOLEAN
	}, {
      classMethods: {
      	associate: function(models) {
          Goal.belongsTo(models.User);
        }
      }
    });
	return Goal;
}