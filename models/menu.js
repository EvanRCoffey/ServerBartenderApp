module.exports = function(sequelize, DataTypes) {
    var Menu = sequelize.define("Menu", {
        menuName: DataTypes.STRING,
        comments: {type: DataTypes.TEXT, allowNull: true},
        menuJSON: DataTypes.JSON,
        deletedByUser: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
        criJSON: DataTypes.JSON
    }, {
        classMethods: {
            associate: function(models) {
                Menu.belongsTo(models.User);
                Menu.belongsTo(models.Job);
            }
        }
    });
    return Menu;
}
