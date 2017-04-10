var User = require('../models/user'),
    Camp = require('../models/camp');

function indexApi(req, res) {
  User.find({}, function(err, users) {
    if (err) throw err;

    res.json(users)
  });
}

module.exports = {
  indexApi : indexApi
}
