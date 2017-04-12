var express    = require('express'),
    router     = express.Router(),
    request    = require('request')
    bodyParser = require('body-parser'),
    passport   = require('passport')

var {getSignup, postSignup, getLogin, postLogin, getLogout, getFacebook, getFacebookCallback} = require('../controllers/users'),
    {indexUsers} = require('../controllers/api'),
    {indexCamps, searchCamp, searchCampState, createCamp, deleteCamp} = require('../controllers/camps');

function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect('/');
}

router.route('/signup')
	.get(getSignup)
	.post(postSignup);

router.route('/login')
	.get(getLogin)
	.post(postLogin);

router.route('/')
  .get(indexCamps)
  .post(createCamp);

router.route('/:id')
  .delete(deleteCamp);

router.route('/auth/facebook')
  .get(getFacebook);

router.route('/auth/facebook/callback')
  .get(getFacebookCallback)

// router.route('/users')
//   .get(users)


// router.route('/camp')
//   .post(createCamp);
//
// router.route('/camp/:id')
//   .delete(deleteCamp)

module.exports = router
