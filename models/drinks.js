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
      drink_name: 'Wray & Nephew White Overproof Rum',
      tasting_note: 'Clear in colour; intense fruit aromas with brown sugar and spice notes; full-bodied with sweet notes on the palate; long finish',
      drink_pic: 'https://dx5vpyka4lqst.cloudfront.net/products/326223/images/full.jpeg',
      user_name: 'Samuel L. Jackson',
      user_rating: 5,
      user_review: 'This is by far the greatest rum in the world!'
  }).then(drinks => {
      console.log(drinks);
    });

    return Drinks;
  };
