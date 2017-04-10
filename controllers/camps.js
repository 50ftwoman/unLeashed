var Camp = require('../models/camp.js'),
    User = require('../models/user.js'),
    http = require('request')

var parseString = require('xml2js').parseString;

function searchCamp(req, res) {
  http('http://api.amp.active.com/camping/campgrounds/?pets=3010&api_key=hpsp3pj5sexdxpn3d36w57h9', function(err, response, body) {
    parseString(body, function (err, result) {
      console.dir(result)
      res.json(result)
    })
  })
}

function searchCampState(req, res) {
  var state = req.body.state
  http('http://api.amp.active.com/camping/campgrounds/?pstate=' + state + '&pets=3010&api_key=hpsp3pj5sexdxpn3d36w57h9', function(err, response, body){
    parseString(body, function (err, result) {
      console.dir(result)
      res.json(result)
   })
 })
}


module.exports = {
  searchCamp      : searchCamp,
  searchCampState : searchCampState
}



// parseString(xml, function (err, result) {
//   console.dir(result);
// });
