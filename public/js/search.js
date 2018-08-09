$(document).ready(function () {
    $('#search-body').hide();
    $('.top-hide').hide();

    $('.hamburger').on('click', function () {
        $('nav').toggleClass('hide');
    });

    $("#submit-main").on("click", function () {
        event.preventDefault();
        var query = $('#query').val().trim();
        console.log(query)
        wineInfo(query);
        $('#search-body').show();
        $(".main-search").hide();
        $('.top-hide').show();
    });

    var accordion = $('.accordion-toggle')

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener("click", function () {
            this.classList.toggle("active");

            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    var drinkName = '';
    var tastingNote = '';
    var drinkPic = '';
    var userRating ;
    var userName = '';
    var userReview = '';

    //get info for wine query from LCBO API & append to page on done
    function wineInfo(query) {
        $.ajax({
            method: "GET",
            url: "/api/LCBO/" + query
            //   data: query
        }).done(function (data) {
            console.log(data);
            drinkName = data.name;
            tastingNote = data.tasting_note;
            drinkPic = data.image_url;
            $("#search-result-img").attr("src", drinkPic);
            $('#result-name').append(drinkName);
            $("#result-description").append(tastingNote);

            $('.submit-review').on("click", function () {
                event.preventDefault();
                addReview();
            });
        });

        function addReview(){
            userRating = parseInt($('input[name="rating"]:checked').val());
            userName = $('#name').val().trim();
            userReview = $('#review').val().trim();
            if (!userRating|| !userName || !userReview) {
                return;
            }
            var newReview = {
                drink_name: drinkName,
                tasting_note: tastingNote,
                drink_pic: drinkPic,
                user_name: userName,
                user_rating: userRating,
                user_review: userReview
            }
            console.log(newReview);
            submitReview(newReview);
    }

    function submitReview(review) {
        $.ajax({
            method: "POST",
            url: "/api/drinks",
            data: review
            //   data: query
        }).done(function (data) {
            window.location.href = "/index"

        });
    }
    }
});


