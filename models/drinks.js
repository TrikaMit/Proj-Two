module.exports = function (sequelize, DataTypes) {
    var Drinks = sequelize.define("Drinks", {
      //Drink will have a title (User/LCBO API), type (LCBO API), rating (LCBO API), and review (User input)
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      rating: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
  
    Drinks.associate = function (models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Drinks.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Drinks;
  };
  