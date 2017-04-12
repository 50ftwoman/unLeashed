var mongoose = require('mongoose')

var campSchema = new mongoose.Schema({
  facilityName    : String,
  facilityPhoto   : String,
  stateName       : String,
  petfriendly     : {type: Boolean, default: true}
})

var Camp = mongoose.model('Camp', campSchema);

module.exports = Camp;
