'use strict';
const re = new RegExp(/.*\./);
const reV6 = new RegExp(/[0-9a-fA-F]{1,4}:[0-9a-fA-F]{1,4}:[0-9a-fA-F]{1,4}:/);

function truncateIPv4(ip) {
    const ret = ip.match(re);
    return ret && ret[0];
}

function truncateIPv6(ip) {
    const ret = ip.match(reV6);
    return ret && ret[0] + ':';
}

function truncate(ip) {
    return truncateIPv4(ip) || truncateIPv6(ip);
}
exports = module.exports = truncate;
