var mongoose = require('mongoose')

var campSchema = new mongoose.Schema({
  facilityName    : String,
  description     : String,
  stateName       : String,
  petfriendly     : {type: Boolean, default: true}
})

var Camp = mongoose.model('Camp', campSchema);

module.exports = Camp;
