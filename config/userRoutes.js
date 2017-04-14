var express = require('express'),
    passport = require('passport'),
    User    = require('../models/user.js')
    userRouter = express.Router()

  userRouter.post('/signup', function(req, res){
    User.register(new User({username: req.body.username}),
      req.body.password, function(err, account) {
        if(err) { return res.status(500).json({err}) }
        passport.authenticate('local')(req, res, function() {
          return res.json({ status: 'Registration successful '})
        })
      })
  })

  userRouter.post('/login', function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
      if(err) return next(err)
      if(!user) return res.status(401).json({err : info})
      req.logIn(user, function(err) {
        if(err) return res.json({err: 'could not log user'})
        res.status(200).json({
          status: 'login successful',
          user: user
        })
      })
    })(req, res, next)
  })

userRouter.get('/logout', function(req, res){
  req.logout()
  res.status(200).json({status: 'bye'})
})

userRouter.get('/status', function(req, res){
  if(!req.isAuthenticated()) {
   return res.status(200).json({status: false})
 }
   res.status(200).json({status: true, user: req.user})
})

module.exports = userRouter
