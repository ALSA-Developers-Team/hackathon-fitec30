//const getIp = require('./ips')



const listenAppMsg = port => `
            =[ALSA Debug Server]=
------------------------------------------------
🚀 The server has been mounted in.

🖥  Local:            http://127.0.0.1:${port}
🌐 On Your Network:  

🎉 Happy hacking :)
------------------------------------------------`;

const sendResponse = (
  success = true,
  code = 200,
  message = "Ok",
  data = null
) => ({
  success,
  code,
  message,
  data,
});

module.exports = {
  listenAppMsg,
  sendResponse
}