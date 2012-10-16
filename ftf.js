var request = require('request');

var API_SERVER = 'projects.propublica.org';
var API_BASE = '/free-the-files';

exports.version = '0.0.1';

// Get a list of all the markets
exports.markets = function(callback) {
  invoke('markets.json', {}, function(resp){
    callback(resp);
  });
};

// Get a single market by slug
exports.market = function(slug, callback) {
  invoke('markets/' + slug + '.json', {}, function(resp){
    callback(resp);
  });
};

// Get a single station by callsign
exports.station = function(callsign, callback) {
  invoke('stations/' + callsign + '.json', {}, function(resp){
    callback(resp);
  });
};

// Get a list of all the comittees
exports.committees = function(callback) {
  invoke('committees.json', {}, function(resp){
    callback(resp);
  });
};

// Get a single committee by slug
exports.committee = function(slug, callback) {
  invoke('committees/' + slug + '.json', {}, function(resp){
    callback(resp);
  });
};

// Get a filing by id
exports.filings = function(id, callback) {
  invoke('filings/' + id + '.json', {}, function(resp){
    callback(resp);
  });
};


// Helper functions
function buildRequestUrl(path) {
  var url = 'https://' + API_SERVER + API_BASE + '/' + path;

  return url;
}

function invoke(path, params, callback) {
  var url = buildRequestUrl(path);

  request(url, {qs: params}, function (error, response, body) {
    callback(JSON.parse(body));
  });
}
