app.get('/', function(request, response) {
    res.status(200).json({ firsname: 'Pepe', lastname: 'Martin'});
  });
  
  app.get('/error', function(request, response) {
    res.status(500).send('Server error');
  });