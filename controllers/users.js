var passport = require('passport');
var User = require('../models/user.js')

//GET /signup
function getSignup(req, res) {
	res.render('signup.html', { message: req.flash('signupMessage') });
}

function postSignup(req, res) {
	console.log(req.params)

	var signUpStrategy = passport.authenticate('local-signup', function(err, user) {

		res.json(user)
	});

	return signUpStrategy(req, res)
}
//
// function getLogin(req, res) {
// 	console.log('logged in')
// 	// res.render('login.html', { message: req.flash('loginMessage') });
// 	res.json({ message: 'getLogin does something' });
// }

function postLogin(req, res) {
	var loginProperty = passport.authenticate('local-login', {
		successRedirect: '/#/home',
		failureRedirect: '/#/login',
		failureFlash: true
	});

	return loginProperty(req, res);
}

function getLogout(req, res) {
	console.log('logged out')
	req.logout();
	res.redirect('/');
}

function showUser(req, res) {
	User.findById(req.user.id, function(err, user){
		if (err) res.status(404).send(err)

		res.json(user)

	})
}

function updateUser(req, res) {
	User.findbyId({_id: req.params.id}, function(err, user) {
		if(err) res.status(404).send(err)

		if(req.body.name) user.name = req.body.name
		if(req.body.email) user.email = req.body.email

		user.save(function(err) {
			if(err) res.status(500).send(err)

			res.status(200).send(user)
		})
	})
}

function destroy(req, res) {
	User.remove({_id: req.params.id}, function(err) {
		if(err) res.status(500).send(err)

		res.status(200).send({message: "account deleted"})
	})
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
     successRedirect : '/#/home',
     failureRedirect : '/#/login'
   });

   return loginProperty(request, response);
 }

//=================FACEBOOK==========================

function home(req, res) {
	res.render('/#/home');
}

module.exports = {
	home : home,
	getSignup: getSignup,
	postSignup: postSignup,
	// getLogin: getLogin,
	postLogin: postLogin,
	getLogout: getLogout,
	getFacebook: getFacebook,
	getFacebookCallback: getFacebookCallback,
	getUser	: showUser
}
