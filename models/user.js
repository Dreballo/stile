module.exports = function(sequelize, DataTypes) {

    let User = sequelize.define("User", {

            id: {
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER
            },

            email: {
                type: DataTypes.STRING,
                allowNull: true,
                validate:{
                    isEmail: true
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true,
                len: [1, 20]
            }
        },
        {

            classMethods: {
                associate: function(models) {
                    User.hasMany(models.Appointment, {
                        foreignKey: {
                            allowNull: true
                        }
                    });
                    User.hasMany(models.Stylist, {
                        foreignKey: {
                            allowNull: true
                        }
                    });
                    User.hasOne(models.Profile, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }



        });
    return User;
};
