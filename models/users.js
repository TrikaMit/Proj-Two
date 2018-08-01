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
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      User.hasMany(models.Drinks, {
        as: 'drinks'
      });
    };
  
    return User;
  };
  