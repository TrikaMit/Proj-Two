
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
    });
  }

//show/hide function on click

//submit to DB on click

//close button & refresh page



