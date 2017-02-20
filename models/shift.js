module.exports = function(sequelize, DataTypes) {
	var Shift = sequelize.define("Shift", {
		restaurant_id: DataTypes.INTEGER,
		shiftDate: DataTypes.DATE,
		timeIn: DataTypes.TIME,
		timeOut: DataTypes.TIME,
	    shiftType: DataTypes.STRING,
	    largestTip: DataTypes.DECIMAL,
	    smallestTip: DataTypes.DECIMAL,
	    stiffed: DataTypes.INTEGER,
	    bwl: DataTypes.DECIMAL,
	    sales: DataTypes.DECIMAL,
	    tipout: DataTypes.DECIMAL,
	    totalWalkedWith: DataTypes.DECIMAL,
	    tipPercent: DataTypes.DECIMAL,
	    ppa: DataTypes.DECIMAL,
		comments: DataTypes.TEXT,
	    breakthroughs: DataTypes.TEXT,
	    isReal: DataTypes.BOOLEAN
	}, {
      classMethods: {
        associate: function(models) {
          Shift.belongsTo(models.User, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
	);
	return Shift;
}