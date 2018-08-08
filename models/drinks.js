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


    Drinks.create({
      drink_name: 'Wolf Blass Yellow Label Cabernet Sauvignon',
      tasting_note: 'A test',
      drink_pic: 'https://dx5vpyka4lqst.cloudfront.net/products/251876/images/full.jpeg',
      user_name: 'Pele',
      user_rating: 4,
      user_review: 'Very versatile, delightfully drinkable, perfectly palatable'
  }).then(drinks => {
      console.log(drinks);
    });

    return Drinks;
  };
