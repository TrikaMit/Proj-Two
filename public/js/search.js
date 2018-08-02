
$('#submit').on('click', function () {
    event.preventDefault();
    var query = $('#query').val().trim();
    console.log(query)
    wineInfo(query);

})

function wineInfo(query) {
    $.ajax({
      method: "GET",
      url: "/api/LCBO/" + query,
    //   data: query
    })
      .then(function(res){
        //   console.log(res)
        //   res.json(res);
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