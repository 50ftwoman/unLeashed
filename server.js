var express    = require('express'),
    app        = express(),
    mongoose   = require('mongoose'),
    morgan     = require('morgan'),
    bodyParser = require('body-parser')

var db = process.env.MONGODB_URL || 'mongodb://localhost/unleashed';
mongoose.connect(db);

app.use(morgan('dev'));
app.use(bodyParser());

var routes = require('./config/routes');
app.use('/', routes);

var port = process.env.PORT || 3000;
app.list(port, function() {
  console.log('magic on port', port)
})
