module.exports = function (sequelize, DataTypes){

    let Stylist = sequelize.define("Stylist", {

        id:{
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        imageURL: {
            type: DataTypes.STRING,
            allowNull: true
        },

        phone: {
            type: DataTypes.STRING,
            allowNull: true,
            len: [1, 16]
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [1]
            }
        },
        address:{
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
        {
            classMethods: {
                associate: function(models){
                    Stylist.hasMany(models.Appointment,{
                        foreignKey:{
                            allowNull: true
                        }
                    });
                    Stylist.hasMany(models.Availability,{
                        foreignKey:{
                            allowNull: true
                        }
                    });
                }
            }
        });

    return Stylist;
};