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
  //     drink_name: 'Wray & Nephew White Overproof Rum',
  //     tasting_note: 'Clear in colour; intense fruit aromas with brown sugar and spice notes; full-bodied with sweet notes on the palate; long finish',
  //     drink_pic: 'https://dx5vpyka4lqst.cloudfront.net/products/326223/images/full.jpeg',
  //     user_name: 'Samuel L. Jackson',
  //     user_rating: 5,
  //     user_review: 'This is by far the greatest rum in the world!'

      
  // }).then(drinks => {
  //     console.log(drinks);
  //   });

    return Drinks;

    //   Drinks.create({
  //     drink_name: 'Hennessy VS Cognac',
  //     tasting_note: "The world's most popular Cognac, Hennessy VS is the modern-day equivalent of the original Hennessy 3-Star. It is an expression of expertise and consistency, centuries in the making. Intense character and full-bodied flavours of toasted almond, fresh grapes, and citrus zest make this ideal served neat or in a cocktail",
  //     drink_pic: 'https://dx5vpyka4lqst.cloudfront.net/products/8284/images/full.jpeg',
  //     user_name: 'Dave Chappelle',
  //     user_rating: 4,
  //     user_review: 'This definitely helps with my jokes!'


  // }).then(drinks => {
  //     console.log(drinks);
  //   });

  //   Drinks.create({
  //     drink_name: 'Heineken',
  //     tasting_note: '142 years of tradition are behind this iconic, premium lager. Clear gold yellow colour with fine head. Appealing aromas of sweet malt, floral hops and hints of biscuit, grain and herb. Dry, crisp and fresh with a creamy texture. Flavours of barley malt and fruit, leading to grassy/herbal notes on a refreshing bitter finish.',
  //     drink_pic: 'https://dx5vpyka4lqst.cloudfront.net/products/302810/images/full.jpeg',
  //     user_name: 'Oprah Winfrey',
  //     user_rating: 5,
  //     user_review: 'One of the best beers yet!'


  // }).then(drinks => {
  //     console.log(drinks);
  //   });

  //   Drinks.create({
  //     drink_name: 'Wray & Nephew White Overproof Rum',
  //     tasting_note: 'Clear in colour; intense fruit aromas with brown sugar and spice notes; full-bodied with sweet notes on the palate; long finish',
  //     drink_pic: 'https://dx5vpyka4lqst.cloudfront.net/products/326223/images/full.jpeg',
  //     user_name: 'Lebron James',
  //     user_rating: 5,
  //     user_review: 'This rum makes me want to dunk on someone lol!'


  // }).then(drinks => {
  //     console.log(drinks);
  //   });

  //   Drinks.create({
  //     drink_name: 'Jagermeister',
  //     tasting_note: 'The full list of the 56 botanicals that go into making this complex liqueur is a closely guarded secret. This mysterious liquid is aged for up to a year in German oak barrels, before bottling. Expect some sweetness on the palate along with a myriad of flavours that include citrus, spice and a hint of bitterness.',
  //     drink_pic: 'https://dx5vpyka4lqst.cloudfront.net/products/25999/images/full.jpeg',
  //     user_name: 'Nas',
  //     user_rating: 2,
  //     user_review: 'This is by far the worst drink in the world!'


  // }).then(drinks => {
  //     console.log(drinks);
  //   });
  };

  
  