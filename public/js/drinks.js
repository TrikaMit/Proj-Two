$.ajax({
    url: 'https://lcboapi.com/products?q=' + wineChoice[i],
    method: 'GET',
    headers: {
        'Authorization': 'Token MDplODFlZDdmZS02MTA5LTExZTgtODQ2NS00N2FmNGYwOTVkNDE6ZmpjOGFldHpERFg3QllLekFRRmdmYkZjWlp4Z3VlcVU2VzN2'
    }
}).then(response => {
    console.log(response)
})