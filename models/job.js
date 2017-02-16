module.exports = function(sequelize, DataTypes) {
	var Job = sequelize.define("Job", {
		restaurant_id: DataTypes.INTEGER,
		user_id: DataTypes.INTEGER,
		startDate: DataTypes.DATE,
		endDate: DataTypes.DATE,
		wage: DataTypes.DECIMAL,
		isReal: DataTypes.BOOLEAN,
		userJobMenu: DataTypes.INTEGER,
		comments: DataTypes.TEXT
	});
	return Job;
}