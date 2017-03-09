module.exports = function(sequelize, DataTypes) {
    var Shift = sequelize.define("Shift", {
        shiftDate: DataTypes.DATEONLY,
        timeIn: DataTypes.TIME,
        timeOut: DataTypes.TIME,
        shiftType: {type: DataTypes.STRING, allowNull: true},
        largestTip: {type: DataTypes.FLOAT(10,2), allowNull: true},
        smallestTip: {type: DataTypes.FLOAT(10,2), allowNull: true},
        stiffed: {type: DataTypes.INTEGER, allowNull: true},
        bwl: {type: DataTypes.FLOAT(10,2), allowNull: true},
        sales: DataTypes.FLOAT(10,2),
        tipout: {type: DataTypes.FLOAT(10,2), allowNull: true},
        totalWalkedWith: DataTypes.FLOAT(10,2),
        tipPercent: {type: DataTypes.FLOAT(10,2), allowNull: true},
        ppa: {type: DataTypes.FLOAT(10,2), allowNull: true},
        comments: {type: DataTypes.TEXT, allowNull: true},
        breakthroughs: {type: DataTypes.TEXT, allowNull: true},
        deletedByUser: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
        isReal: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function(models) {
                Shift.belongsTo(models.User);
                Shift.belongsTo(models.Job);
            }
        }
    });
    return Shift;
}