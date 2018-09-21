'use strict';
const assert = require('assert'),
    truncateIP = require('..');
describe('#truncate(ip)', function () {
    describe('IPv4', function () {
        it('should anonymize IPv4', function () {
            assert.deepEqual(truncateIP('192.168.0.1'), '192.168.0.');
            assert.deepEqual(truncateIP('127.0.0.1'), '127.0.0.');
            assert.deepEqual(truncateIP('8.8.8.8'), '8.8.8.');
        });
    });
    describe('IPv6', function () {
        it('should anonymize IPv6', function () {
            assert.deepEqual(truncateIP('2001:0DB8:0000:0000:0000:0000:1428:57ab'), '2001:0DB8:0000::');
        });
        it('should anonymize shortened (right) IPv6', function () {
            assert.deepEqual(truncateIP('2001:0DB8:0000:0000::'), '2001:0DB8:0000::');
        });
        it('should anonymize shortened (left) IPv6', function () {
            assert.deepEqual(truncateIP('::2001:0DB8:0000:0000'), '2001:0DB8:0000::');
        });
    });
});
