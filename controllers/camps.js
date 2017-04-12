var Camp = require('../models/camp.js'),
    User = require('../models/user.js'),
    http = require('request')

//XML to JSON
var parseString = require('xml2js').parseString;

function indexCamps(req, res) {
  Camp.find({}, function(err, camps) {
    if (err) res.status(404).send(err)

    res.status(200).send(camps)
    res.json(camps)
  })
}


//list all camps, pet friendly default
function searchCamp(req, res) {
  http('http://api.amp.active.com/camping/campgrounds/?pets=3010&api_key=hpsp3pj5sexdxpn3d36w57h9', function(err, response, body) {
    parseString(body, function (err, result) {
      console.dir(result)
      res.json(result)
    })
  })
}

//all camps by state
function searchCampState(req, res) {
  var state = req.body.state
  http('http://api.amp.active.com/camping/campgrounds/?pstate=' + state + '&pets=3010&api_key=hpsp3pj5sexdxpn3d36w57h9', function(err, response, body){
    parseString(body, function (err, result) {
      console.dir(result)
      res.json(result)
   })
 })
}

function createCamp(req, res) {
  User.findById(req.user._id, function(err, user) {
    if (err) throw err;

    users.camps.push({
      name       : req.body.facilityName,
      state      : req.body.state
    });

    user.save(function(err, user) {
      if (err) throw err;
    });
  });
}

function deleteCamp(req, res) {
  var id     = req.params.id,
      userId = req.user._id;

  User.findById(userId, function(err, user) {
    if (err) throw err;

    var camp = user.camps.id(id);

    user.camp.pull(id);
    user.save(function(err, updatedUser) {
      if (err) throw err;

      res.json({message: 'camp deleted'})
    })
  })
}

// API actions

function indexCampsJSON(req, res) {
  var state = req.query.state
  http('http://api.amp.active.com/camping/campgrounds/?pstate=' + state + '&pets=3010&api_key=hpsp3pj5sexdxpn3d36w57h9', function(err, response, body) {
    parseString(body, function (err, result) {
      console.dir(result)
      var results = result.resultset.result
      var top20 = []
      for (var i = 0; i < 5; i++) {
        top20.push(results[i]['$'])
      }
      res.json(top20)
    })
  })
}

// function campDetails(req, res) {
//   var parkId = req.body.parkId
//   http('http://api.amp.active.com/camping/campground/details?parkId=' + parkId + '&api_key=ura5qgpj5ggw29u64wewdv5f', function(err, response, body) {
//     parseString(body, function (err, result) {
//       console.dir(result)
//       res.json(result)
//       })
//     })
//   }


module.exports = {
  searchCamp      : searchCamp,
  searchCampState : searchCampState,
  createCamp      : createCamp,
  deleteCamp      : deleteCamp,
  indexCamps      : indexCamps,
  // campDetails     : campDetails,

  indexCampsJSON  : indexCampsJSON
}
