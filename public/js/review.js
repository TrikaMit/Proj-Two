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
        for (var i = 0; i<5; i++){
            $("#result-one-name").append(data[1].drink_name)
        }
        console.log(data[0].drink_name);
        // $('body').append(data.name)

        // $('#result-name').append(data.name);
        // $("#result-description").append(data.tasting_note);

    });
}