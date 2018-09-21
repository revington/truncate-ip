[![Build Status](https://travis-ci.org/revington/truncate-ip.svg?branch=master)](https://travis-ci.org/revington/truncate-ip)
[![Coverage Status](https://coveralls.io/repos/github/revington/truncate-ip/badge.svg?branch=master)](https://coveralls.io/github/revington/truncate-ip?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/revington/truncate-ip/badge.svg?targetFile=package.json)](https://snyk.io/test/github/revington/truncate-ip?targetFile=package.json)
# truncate-ip

Dead simple, zero deps, 100% code coverage module to protect your users privacy by truncating their IP addresses.  
This module truncates IPv4 to 24 bits and IPv6 to 48 bits.

## Usage
```
const truncateIP = require('truncate-ip');
console.log(truncateIP('192.168.0.1')); // prints 192.168.0.
console.log(truncateIP('2001:0DB8:0000:0000:0000:0000:1428:57ab'));  // prints 2001:0DB8:0000::
```
