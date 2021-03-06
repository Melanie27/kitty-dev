var express = require('express'),
  http = require('http'),
  items = require('./data/menu-items');
  profiles = require('./data/kitty-profiles');
  questions = require('./data/kitty-survey');

var app = express()
  .use(express.bodyParser())
  .use(express.static('public'));

app.get('/items', function  (req, res) {
  res.json(items);
});


//get the json for kitty profiles
app.get('/profiles', function  (req, res) {
  res.json(profiles);
});

//get the json for the kitty questions
app.get('/questions', function(req, res) {
  res.json(questions);
});

app.post('/items', function  (req, res) {
  var matches = items.filter(function  (item) {
    return item.url === req.body.url;
  });

  if (matches.length > 0) {
    res.json(409, {status: 'item already exists'});
  } else {
    req.body.id = req.body.url;
    items.push(req.body);
    res.json(req.body);
  }

});

app.get('/items/:item_name', function  (req, res) {
  var matches = items.filter(function  (item) {
    return item.url === req.params.item_name;
  });

  if (matches.length > 0) {
    res.json(matches[0]);
  } else {
    res.json(404, {status: 'invalid menu item'});
  }

});

//filter individual kitty questions
//construct a new jquery object from the urls matching subset - individual urls for each kitty type
app.get('/questions/:question_name', function (req, res) {
  var matches = questions.filter(function (question) {
    return question.url === req.params.question_name;
  });

  if (matches.length > 0) {
    res.json(matches[0]);
  } else {
    res.json(404, {status: 'Invalid question type'});
  }

  });

//filter individual kitty profiles
//construct a new jquery object from the urls matching subset - individual urls for each kitty type
app.get('/profiles/:profile_name', function (req, res) {
  var matches = profiles.filter(function (profile) {
    return profile.url === req.params.profile_name;
  });

  if (matches.length > 0) {
    res.json(matches[0]);
  } else {
    res.json(404, {status: 'invalid profile type'});
  }

});



app.delete('/items/:item_name', function  (req, res) {

  var found = false;

  items.forEach(function (item, index) {
    if (item.url === req.params.item_name) {
      found = index;
    }
  });

  if (found) {
    items.splice(found, 1);
    res.json(200, {status: 'deleted'});
  } else {
    res.json(404, {status: 'invalid menu item'});
  }

});

app.get('/*', function  (req, res) {
  res.json(404, {status: 'not found'});
});

http.createServer(app).listen(3000, function () {
  console.log("Server ready at http://localhost:3000");
});
