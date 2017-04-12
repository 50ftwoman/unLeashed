var express    = require('express'),
    router     = express.Router(),
    request    = require('request')
    bodyParser = require('body-parser'),
    passport   = require('passport')

var {indexCampsJSON} = require('../controllers/camps');

// function authenticatedUser(req, res, next) {
//   if (req.isAuthenticated()) return next();
//
//   res.redirect('/');
// }

  router.route('/')
  .get(indexCampsJSON)

// router.route('/camp')
//   .post(createCamp);
//
// router.route('/camp/:id')
//   .delete(deleteCamp)

module.exports = router
