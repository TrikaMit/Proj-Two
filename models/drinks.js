module.exports = function (sequelize, DataTypes) {
    var Drinks = sequelize.define("Drinks", {
      //Drink will have a title (User/LCBO API), type (LCBO API), rating (LCBO API), and review (User input)
      name: {
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
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      review: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    Drinks.associate = function (models) {
      Drinks.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    
    
  //   Drinks.create({ 
  //     name: 'Tester',
  //     type: 'A test',
  //     rating: 3, 
  //     review: 'This is a test',
  //     UserId: 'Tester'
  // }).then(drinks => {
  //     console.log(drinks);
  //   });

    return Drinks;
  };
  