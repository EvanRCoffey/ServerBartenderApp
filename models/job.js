module.exports = function(sequelize, DataTypes) {
	var Job = sequelize.define("Job", {
		job_name: DataTypes.STRING,
		startDate: DataTypes.DATEONLY,
		endDate: DataTypes.DATEONLY,
		wage: DataTypes.FLOAT(10,2),
		isReal: DataTypes.BOOLEAN,
		stillWorkingHere: DataTypes.BOOLEAN,
		comments: DataTypes.TEXT
	}, {
      classMethods: {
      	associate: function(models) {
            Job.belongsTo(models.User);
        },
        associate: function(models) {
          	Job.hasMany(models.Shift);
        }
      }
    });
	return Job;
}

// User.hasMany(Post, {foreignKey: 'user_id'})
// Post.belongsTo(User, {foreignKey: 'user_id'})