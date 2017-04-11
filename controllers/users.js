var passport = require('passport');

//GET /signup
function getSignup(req, res) {
	res.render('signup.html', { message: req.flash('signupMessage') });
}

function postSignup(req, res) {
	console.log(req.params)

	var signUpStrategy = passport.authenticate('local-signup', {
		successRedirect: 'home.html',
		failureRedirect: 'signup.html',
		failureFlash: true
	});

	return signUpStrategy(req, res)
}

function getLogin(req, res) {
	console.log('logged in')
	res.render('login.html', { message: req.flash('loginMessage') });
}

function postLogin(req, res) {
	var loginProperty = passport.authenticate('local-login', {
		successRedirect: 'index.html',
		failureRedirect: 'login.html',
		failureFlash: true
	});

	return loginProperty(req, res);
}

function getLogout(req, res) {
	console.log('logged out')
	req.logout();
	res.redirect('/');
}


 // =====================================
 // FACEBOOK ACTIONS=====================
 // =====================================
 // route for facebook authentication and login
 function getFacebook(request, response) {
   var signupStrategy = passport.authenticate('facebook', {
     scope : 'email'
   });

   return signupStrategy(request, response);
 }

 // handle the callback after facebook has authenticated the user
 function getFacebookCallback(request, response) {
   var loginProperty = passport.authenticate('facebook', {
     successRedirect : 'index.html',
     failureRedirect : 'login.html'
   });

   return loginProperty(request, response);
 }

//=================FACEBOOK==========================

function home(req, res) {
	res.render('home.html');
}

module.exports = {
	home : home,
	getSignup: getSignup,
	postSignup: postSignup,
	getLogin: getLogin,
	postLogin: postLogin,
	getLogout: getLogout,
	getFacebook: getFacebook,
	getFacebookCallback: getFacebookCallback
}
