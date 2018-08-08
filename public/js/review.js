$(document).ready(function(){
    $('.hamburger').on('click', function () {
        $('nav').toggleClass('hide');

    });
    wineInfo();
});


function wineInfo() {
    $.ajax({
        method: "GET",
        url: "/api/drinks"
    }).done(function (data) {
        for (var i = 0; i < data.length; i++) {
            let name = data[i].drink_name;
            let rating = data[i].user_rating;
            let user = data[i].user_name;
            let review = data[i].user_review;
            let photo = data[i].drink_pic;
            let $figure = $("<figure>", {
                "class": "align-center result"
            });
            let $img = $("<img>", {
                "class": "margin-auto top-drink-img",
                "src": photo
            });
            let $figCap = $("<figcaption>", {
                "class": "result-name margin-auto"
            });
            let $userName = $("<h2>", {
                "class": "margin-auto"
            });
            let $userRating = $("<h2>", {
                "class": "margin-auto"
            });
            let $userReview = $("<h3>", {
                "class": "margin-auto"
            });


            if (rating == 5){
                $($figure).append($img);
                $($figCap).append(name);
                $($userRating).append(`Rating: ${rating}`);
                $($userName).append(`User name: ${user}`);
                $($userReview).append(`Review: ${review}`)
                $(".container").append($figure, $figCap, $userName, $userRating, $userReview);
                console.log(name, rating, review, photo);

            }
        }
    })

};