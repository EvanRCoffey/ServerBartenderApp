module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		user_id: DataTypes.INTEGER,
		user_email: DataTypes.STRING,
		user_name: DataTypes.STRING,
		user_password: DataTypes.STRING,
		user_level: DataTypes.INTEGER,
		restaurant_name: DataTypes.STRING,
		isReal: DataTypes.BOOLEAN
	});
	return User;
}