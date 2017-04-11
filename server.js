var http           = require('request'),
    express        = require('express'),
    app            = express(),
    mongoose       = require('mongoose'),
    hash           = require('bcrypt-nodejs')
    passport       = require('passport'),
    passportConfig = require('./config/passport.js'),
    flash          = require('connect-flash'),
    // ejsLayouts     = require('express-ejs-layouts'),
    path           = require('path'),
    cors           = require('cors'),
    logger         = require('morgan'),
    bodyParser     = require('body-parser'),
    cookieParser   = require('cookie-parser'),
    session        = require('express-session'),
    MongoDBStore   = require('connect-mongodb-session')(session)
    engines        = require('consolidate')

require('dotenv').config();

var db = process.env.MONGODB_URL || 'mongodb://localhost/unleashed';
mongoose.connect(db);


app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public/')));
app.set('views', __dirname + '/public/views');
app.engine('html', engines.mustache)
app.set('view engine', 'html');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(session({ secret: 'unleashed', cookie: {maxAge: 14400000} }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


require('./config/passport')(passport);
//
app.use(function (req, res, next) {
  global.user = req.user;
  next();
})


var routes = require('./config/routes');
app.use('/', routes);

var api_routes = require('./config/api_routes');
app.use('/api/', api_routes);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('magic on port', port)
})
