var expect = require('expect.js');
var ftf = require('../ftf');

describe("ftf", function() {

  describe("#markets", function () {
    it("returns a list of market objects", function (done) {

      ftf.markets(function(resp){
        resp.forEach(function(item){
          expect(item.market).to.not.be(undefined);
          expect(item.market.name).to.not.be(undefined);
          expect(item.market.slug).to.not.be(undefined);
          expect(item.market.freed_ct).to.be.a('number');
          expect(item.market.filings_ct).to.be.a('number');
        });

      done();
      });
    });
  });

  describe("#market", function () {
    it("returns the market object for the specified slug", function (done) {

      ftf.market('boston-manchester', function(resp){
        expect(resp.market.name).to.be('BOSTON (MANCHESTER)');
        expect(resp.market.slug).to.be('boston-manchester');
      });

      done();
    });
  });

  describe("#station", function () {
    it("returns the station object for the specified callsign", function (done) {

      ftf.station('WLNY-TV', function(resp){
        expect(resp.station.callsign).to.be('WLNY-TV');
      });

      done();
    });
  });

  describe("#committees", function () {
    it("returns a list of committee objects", function (done) {

      ftf.committees(function(resp){
        resp.forEach(function(item){
          expect(item.committee).to.not.be(undefined);
          expect(item.committee.name).to.not.be(undefined);
          expect(item.committee.slug).to.not.be(undefined);
          expect(item.committee.gross_amt).to.be.a('string');
          expect(item.committee.id).to.be.a('number');
        });

      done();
      });
    });
  });

  describe("#committee", function () {
    it("returns the committee object for the specified slug", function (done) {

      ftf.station('priorities-usa-action', function(resp){
        expect(resp.committee.name).to.be('PRIORITIES USA ACTION');
        expect(resp.committee.slug).to.be('priorities-usa-action');
        expect(resp.committee.fec_id).to.be('C00495861');
      });

      done();
    });
  });

  describe("#filing", function () {
    it("returns the filing object for the specified id", function (done) {

      ftf.station('15399', function(resp){
        expect(resp.filing.contract_number).to.be('48263');
        expect(resp.committee.dc_slug).to.be('439541-collect-files-72145-political-file-2012-federal');
        expect(resp.committee.id).to.be(15399);
      });

      done();
    });
  });

});