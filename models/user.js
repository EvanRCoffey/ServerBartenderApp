module.exports = function(sequelize, DataTypes) {
	var Blah = sequelize.define("Blah", {
		email: DataTypes.STRING,
		password: DataTypes.STRING
	});
	return Blah;
}