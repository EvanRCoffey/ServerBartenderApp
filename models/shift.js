module.exports = function(sequelize, DataTypes) {
    var Shift = sequelize.define("Shift", {
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "users",
                key: "id"
            }
        },
		restaurant_id: DataTypes.INTEGER,
        shiftDate: DataTypes.DATE,
        timeIn: DataTypes.TIME,
        timeOut: DataTypes.TIME,
        shiftType: DataTypes.STRING,
        largestTip: DataTypes.FLOAT(10,2),
        smallestTip: DataTypes.FLOAT(10,2),
        stiffed: DataTypes.INTEGER,
        bwl: DataTypes.FLOAT(10,2),
        sales: DataTypes.FLOAT(10,2),
        tipout: DataTypes.FLOAT(10,2),
        totalWalkedWith: DataTypes.FLOAT(10,2),
        tipPercent: DataTypes.FLOAT(10,2),
        ppa: DataTypes.FLOAT(10,2),
        comments: DataTypes.TEXT,
        breakthroughs: DataTypes.TEXT,
        isReal: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function(models) {
                Shift.belongsTo(models.User);
            }
        }
    });
    return Shift;
}
