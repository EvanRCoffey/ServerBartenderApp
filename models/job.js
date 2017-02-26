module.exports = function(sequelize, DataTypes) {
	var Job = sequelize.define("Job", {
		job_name: DataTypes.STRING,
		startDate: DataTypes.DATEONLY,
		endDate: {type: DataTypes.DATEONLY, allowNull: true},
		wage: DataTypes.FLOAT(10,2),
		isReal: DataTypes.BOOLEAN,
		stillWorkingHere: DataTypes.BOOLEAN,
		comments: DataTypes.TEXT
	}, {
      classMethods: {
      	associate: function(models) {
            Job.belongsTo(models.User, {
            	foreignKey: 'id',
            	as: 'User_Id'
            });
        },
        associate: function(models) {
          	Job.hasMany(models.Shift);
        }
      }
    });
	return Job;
}

// global.db.Customer.belongsTo(global.db.StateType, {
//     foreignKey: 'cst_state_type',
//     as: 'state_type'
// });