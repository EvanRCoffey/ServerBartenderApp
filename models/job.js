module.exports = function(sequelize, DataTypes) {
	var Job = sequelize.define("Job", {
		restaurant_id: DataTypes.INTEGER,
		user_id: DataTypes.INTEGER,
		startDate: DataTypes.DATE,
		endDate: DataTypes.DATE,
		wage: DataTypes.FLOAT(10,2),
		isReal: DataTypes.BOOLEAN,
		userJobMenu: DataTypes.INTEGER,
		comments: DataTypes.TEXT
	}, {
      classMethods: {
        associate: function(models) {
          Job.hasMany(models.Shift, {
          });
        }
      }
    });
	return Job;
}