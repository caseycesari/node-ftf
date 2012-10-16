#node-ftf

A thin wrapper for [ProPublica](http://www.propublica.org)'s [Free The Files API](https://projects.propublica.org/free-the-files/api)

The Free The Files API is subject to ProPublica's [Data Terms of Use](http://www.propublica.org/about/propublica-data-terms-of-use). 

Not affiliated with ProPublica.

## Installation

    npm install ftf

## Getting Started

    var ftf = require('ftf');

See the [documentation](https://projects.propublica.org/free-the-files/api) for details on all the API routes.

Get all the markets

    ftf.markets(function(resp){
      console.log(resp);
    });

Get a single market by slug

    ftf.market('boston-manchester', function(resp){
      console.log(resp);
    });

Get a station by callsign

    ftf.station('WLNY-TV', function(resp){
      console.log(resp);
    });

Get all the committees

    ftf.committees(function(resp){
      console.log(resp);
    });

Get a committee by slug

    ftf.committee('priorities-usa-action', function(resp){
      console.log(resp);
    });

Get a filing by id

    ftf.station('15399', function(resp){
      console.log(resp);
    });


## Tests

    npm test