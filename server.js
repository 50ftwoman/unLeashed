var http         = require('request'),
    express      = require('express'),
    app          = express(),
    mongoose     = require('mongoose'),
    passport     = require('passport'),
    flash        = require('connect-flash'),
    ejsLayouts   = require('express-ejs-layouts'),
    path         = require('path'),
    morgan       = require('morgan'),
    bodyParser   = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session      = require('express-session')

require('dotenv').config();

var db = process.env.MONGODB_URL || 'mongodb://localhost/unleashed';
mongoose.connect(db);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

// app.set('view engine', 'ejs');
// app.use(ejsLayouts);
// app.set('views', './views');
// app.use(express.status(path.join(__dirname, public)));

app.use(session({ secret: 'unleashed', cookie: {maxAge: 14400000} }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

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
