const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const ips = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4' && !net.internal) {
            if (!ips[name]) {
                ips[name] = [];
            }
            ips[name].push(net.address);
        }
    }
}

const getIp = interface => {
  return ips[interface][0]
}

module.exports = getIp