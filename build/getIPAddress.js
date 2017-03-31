/**
 * 获取IP地址
 */
let os = require('os');
let ifaces = os.networkInterfaces();

function getIPAddress() {
    let ip = '', dev = '', alias = 0;
    for (dev in ifaces) {
        alias = 0;
        ifaces[dev].forEach(function (details) {
            if (details.family == 'IPv4') {
                //console.log(dev + (alias ? ':' + alias : ''), details.address);
                if (dev === 'en0') {
                    ip = details.address;
                }
                ++alias;
            }
        });
    }
    return ip;
}

module.exports = getIPAddress;
