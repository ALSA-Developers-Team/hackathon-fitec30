const app = require('./app')
const connectDB = require('./services/databaseConnection.js')
const { listenAppMsg } = require('./utils/messages')

const port = 3050;

connectDB()

app.listen(port, () => {
  console.log(listenAppMsg(port))
})