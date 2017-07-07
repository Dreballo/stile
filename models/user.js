module.exports = function(sequelize, DataTypes) {

    let User = sequelize.define("User", {

            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate:{
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                len: [1, 20]
            }
        },
        {

            classMethods: {
                associate: function(models) {
                    User.hasOne(models.Appointment, {
                        foreignKey: {
                            allowNull: true
                        }
                    });
                    User.hasOne(models.Stylist, {
                        foreignKey: {
                            allowNull: true
                        }
                    });
                }
            }



        });
    return User;
};
