var mongoose = require('mongoose')

var campSchema = new mongoose.Schema({
  name        : String,
  state       : String,
  petfriendly : Boolean
})

var Camp = mongoose.model('Camp', campSchema);

module.exports = Camp;
