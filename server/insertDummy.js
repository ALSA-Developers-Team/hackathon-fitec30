const Account = require('./models/Account')
const AccountType = require('./models/AccountType')

const connectDB = require('./services/databaseConnection.js')
connectDB()

// AccountType.insertMany([
//   {
//     name: "Puntos",
//     prefix: '4856'
//   },
//   {
//     name: "Cuenta Corriente",
//     prefix: '4857'
//   }
// ])

console.log(AccountType.find())

// Account.insertMany([
//   {
//     name: 'John Doe',
