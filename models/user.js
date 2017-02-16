module.exports = function(sequelize, DataTypes) {
	var Blah = sequelize.define("Blah", {
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		age: DataTypes.INTEGER,
		name: DataTypes.STRING
	});
	return Blah;
}