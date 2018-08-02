module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      review: {
        type: DataTypes.STRING,
        validate: {
          len: [1]
        }
      }
    });
  
    User.associate = function (models) {
      User.hasMany(models.Drinks, {});
    };
  //   User.create({ 
  //     name: 'Tester', 
  //     review: 'This is a test', 
  // }).then(user => {
  //     console.log(user);
  //   });
    
    return User;
  };
