var express    = require('express'),
    router     = express.Router(),
    request    = require('request')
    bodyParser = require('body-parser'),
    passport   = require('passport')

var {home, getSignup, postSignup, getLogin, postLogin, getLogout, getFacebook, getFacebookCallback} = require('../controllers/users'),
    {profile} = require('../controllers/staticpages'),
    {search, postSearch} = require('../controllers/index'),
    {indexApi} = require('../controllers/api');

function authenticatedUser(res, res, next) {
  if (req.isAuthenticated()) return next();

  res.redirect('/');
}

router.route('/')
  .get(home);

// router.route('/index')
//   .get(authenticatedUser, index);

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

// router.route('/search')
//   .get(search)
//   .post(postSearch);

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
