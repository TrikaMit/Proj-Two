module.exports = function (sequelize, DataTypes) {
    var Drinks = sequelize.define("Drinks", {
      //Drink will have a title (User/LCBO API), type (LCBO API), rating (LCBO API), and review (User input)
      drink_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      tasting_note: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      drink_pic: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      user_rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_review: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });

    
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
  