var crypto = require('./crypto'),
    assert = require('assert');
describe('#hash()', function () {
    it('should return 680131659347 when the string param is "leepadg"', function () {
        assert.equal(680131659347, crypto.hash("leepadg"));
    });
});
