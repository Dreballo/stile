module.exports = function (sequelize,DataTypes){

    let Appointment = sequelize.define("Appointment", {

            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },
            available_date:{
                type: DataTypes.STRING,
                validate: {
                    allowNull: true
                }
            },
            start_time: {
                type: DataTypes.STRING,
                validate:{
                    allowNull: true
                }
            },
            end_time: {
                type: DataTypes.STRING,
                validate:{
                    allowNull: true
                }
            },
            location: {
                type: DataTypes.STRING,
                validate:{
                    allowNull:true
                }
            }
        },
        {
            classMethods:{
                associate: function(models) {
                    Appointment.belongsTo(models.Stylist, {
                        foreignKey: {
                            allowNull: true
                        }
                    });
                    Appointment.belongsTo(models.User,{
                        foreignKey:{
                            allowNull: true
                        }
                    });
                }
            }
        });

    return Appointment;
};