var mongoose = require('mongoose')

var campSchema = new mongoose.Schema({
  name        : String,
  state       : String,
  petfriendly : {type: Boolean, default: true}
})

var Camp = mongoose.model('Camp', campSchema);

module.exports = Camp;
