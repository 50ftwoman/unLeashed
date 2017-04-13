var express    = require('express'),
    router     = express.Router(),
    request    = require('request')
    bodyParser = require('body-parser'),
    passport   = require('passport')

var {campDetails, indexCampsJSON} = require('../controllers/camps');
var {indexUsers} = require('../controllers/api.js');


// function authenticatedUser(req, res, next) {
//   if (req.isAuthenticated()) return next();
//
//   res.redirect('/');
// }

router.route('/users')
  .get(indexUsers)

  router.route('/')
  .get(indexCampsJSON)

router.route('/camp')
  .get(campDetails);

module.exports = router
