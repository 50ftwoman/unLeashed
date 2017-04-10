var mongoose              = require('mongoose'),
    Camp                  = require('./camp'),
    Schema                = mongoose.Schema,
    passportLocalMongoose = require('passport-local-mongoose')

var userSchema = mongoose.Schema({
  local : {
    name     : String,
    email    : String,
    password : String
  },
  facebook : {
    id       : String,
    toke     : String,
    email    : String,
    name     : String
  },
    camps    : [Camp.schema]
});

// adds passport encryption
// userSchema.methods.encrypt = function(password) {
// 	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// userSchema.methods.validPassword = function(password) {
// 	return bcrypt.compareSync(password, this.local.password);
// };

var User = mongoose.model('User', userSchema);

userSchema.plugin(passportLocalMongoose)
module.exports = User;
