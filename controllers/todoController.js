var bodyParser = require('body-parser');

var data = [{item: 'Feed the cat'}, {item: 'Bake pie'}, {item: 'Eat pie then sleep'}];


module.exports = function(app){

  app.get('/todo', function(req, res){
    res.render('todo', {todos: data});
  });

  app.post('/todo', function(req, res){

  });

  app.delete('/todo/:item', function(req, res){

  });

};
