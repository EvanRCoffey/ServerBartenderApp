module.exports = function(sequelize, DataTypes) {
	var Restaurant = sequelize.define("Restaurant", {
		restaurant_id: DataTypes.INTEGER,
		restaurant_name: DataTypes.STRING,
		defaultMenu: DataTypes.INTEGER,
		isReal: DataTypes.BOOLEAN
	});
	return Restaurant;
}