var express    = require('express'),
    router     = express.Router(),
    request    = require('request')
    bodyParser = require('body-parser'),
    passport   = require('passport')

var {home, getSignup, postSignup, getLogin, postLogin, getLogout, getFacebook, getFacebookCallback} = require('../controllers/users'),
    {profile} = require('../controllers/staticpages'),
    {indexApi} = require('../controllers/api'),
    {searchCamp, searchCampState, createCamp, deleteCamp} = require('../controllers/camps');

function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect('/');
}

router.route('/')
  .get(home);

router.route('/home')
  .get(authenticatedUser, searchCamp);

router.route('/camp')
  .post(createCamp)

router.route('/camp/:id')
  .delete(deleteCamp)

router.route('/profile')
  .get(profile);

router.route('/signup')
  .get(getSignup)
  .post(postSignup);

router.route('/login')
  .get(getLogin)
  .post(postLogin);

router.route('/logout')
  .get(getLogout);

router.route('/search')
  .get(searchCamp)
  .post(searchCampState);

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
