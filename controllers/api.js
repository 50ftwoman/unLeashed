var User = require('../models/user'),
    Camp = require('../models/camp');

function indexUsers(req, res) {
  User.find({}, function(err, users) {
    if (err) throw err;

    res.json(users)
  });
}

module.exports = {
  indexUsers : indexUsers
}
