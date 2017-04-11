var express    = require('express'),
    router     = express.Router(),
    request    = require('request')
    bodyParser = require('body-parser'),
    passport   = require('passport')

var {getSignup, postSignup, getLogin, postLogin, getLogout, getFacebook, getFacebookCallback} = require('../controllers/users'),
    {indexApi} = require('../controllers/api'),
    {index, searchCamp, searchCampState, createCamp, deleteCamp} = require('../controllers/camps');

function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect('/');
}

router.route('/')
  .get(index)
  .post(createCamp)

router.route('/:id')
  .delete(deleteCamp);

router.route('/api')
  .get(indexApi);

router.route('/auth/facebook')
  .get(getFacebook);

router.route('/auth/facebook/callback')
  .get(getFacebookCallback)



// router.route('/camp')
//   .post(createCamp);
//
// router.route('/camp/:id')
//   .delete(deleteCamp)

module.exports = router
