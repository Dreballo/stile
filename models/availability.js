module.exports = function (sequelize,DataTypes){

  let Availability = sequelize.define("Availability", {

      id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      available_date:{
          type: DataTypes.DATEONLY,
          validate: {
              isDate: true
          }
      },
      available_time: {
          type: DataTypes.STRING,
          validate:{
                allowNull: true
          }
      },
      open: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
      }
  },
      {
        classMethods:{
            associate: function(models) {
                Availability.belongsTo(models.Stylist, {
                    foreignKey: {
                        allowNull: true
                    }
                });
            }
        }
    });

    return Availability;
};