
$('#submit-main').on('click', function () {
    event.preventDefault();
    var query = $('#query').val().trim();
    console.log(query)
    wineInfo(query);

})

function wineInfo(query) {
    $.ajax({
      method: "GET",
      url: "/api/LCBO/" + query
    //   data: query
    }).done(function(data){
        console.log(data);
        $('body').append(data.name)
        $("#search-result-img").attr("src", data.image_url);
        $('#result-name').append(data.name);
        $("#result-description").append(data.tasting_note);

    });
  }


// function wineCall(query) {
//     $.ajax({
//         url: `https://lcboapi.com/products?q=${query}`,
//         method: 'GET',
//         headers: {
//             'Authorization': 'Token MDo3Y2Y5OGI3OC05MjgxLTExZTgtODhjNi0wZjcyYzQ0MDdiYzE6bnp2b0pjUDlpdUUxUnplbVAxZ3NvdDNMZmtzcWxGeFFwMEFI'
//         }
//     }).then(function (response) {
//         console.log(response)
//     });
// };



    $('#search-body').hide();
    $('.top-hide').hide();

    $("#submit-main").on("click", function () {
        event.preventDefault();
        $('#search-body').show();
        $(".main-search").hide();
        $('.top-hide').show();
    });


    $('.submit-review').on("click", function () {

        //TODO: CREATE
        event.preventDefault();
    });

    var accordion = document.getElementsByClassName("accordion-toggle");

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


    $('.hamburger').on('click', function () {
        console.log('working');
        $('nav').toggleClass('hide');

    });

