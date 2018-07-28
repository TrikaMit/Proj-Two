var ACCESS_KEY = require('./keys.js');
$.ajax({
    url: 'https://lcboapi.com/products?q=' + 'merlot',
    method: 'GET',
    headers: {
        'Authorization': `Token ${ACCESS_KEY}`
    }
}).then(response => {
    console.log(response)
});