var http           = require('request'),
    express        = require('express'),
    app            = express(),
    mongoose       = require('mongoose'),
    hash           = require('bcrypt-nodejs')
    passport       = require('passport'),
    passportConfig = require('./config/passport.js'),
    flash          = require('connect-flash'),
    ejsLayouts     = require('express-ejs-layouts'),
    path           = require('path'),
    logger         = require('morgan'),
    bodyParser     = require('body-parser'),
    cookieParser   = require('cookie-parser'),
    session        = require('express-session'),
    MongoDBStore   = require('connect-mongodb-session')(session),

require('dotenv').config();

var db = process.env.MONGODB_URL || 'mongodb://localhost/unleashed';
mongoose.connect(db);

const store = new MongoDBStore({
  uri: db,
  collection: 'sessions'
});

// app.use(express.static(clientDir))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  secret: 'boooooooooom',
  cookie: {maxAge: 60000000},
  resave: true,
  saveUninitialized: false,
  store: store
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash());

// require('./config/passport')(passport);

app.use(function (req, res, next) {
  global.user = req.user;
  next();
})

var routes = require('./config/routes');
app.use('/', routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('magic on port', port)
})
