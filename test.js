var crypto = require('./crypto'),
    assert = require('assert');
describe('#hash()', function () {
    it('should return 267 when the string param is "n"', function () {
        assert.equal(267, crypto.hash("n"));
    });
    it('should return 9892 when the string param is "nt"', function () {
        assert.equal(9892, crypto.hash("nt"));
    });
    it('should return 366007 when the string param is "nte"', function () {
        assert.equal(366007, crypto.hash("nte"));
    });
    it('should return 680131659347 when the string param is "leepadg"', function () {
        assert.equal(680131659347, crypto.hash("leepadg"));
    });
});
describe('#reverse()', function () {
    it('should return "n" when the hash param is 267', function () {
        assert.equal("n", crypto.inverse(267));
    });
    it('should return "nt" when the hash param is 9892', function () {
        assert.equal("nt", crypto.inverse(9892));
    });
    it('should return "nte" when the hash param is 366007', function () {
        assert.equal("nte", crypto.inverse(366007));
    });
    it('should return "leepadg" when the hash param is 680131659347', function () {
        assert.equal("leepadg", crypto.inverse(680131659347));
    });
});
