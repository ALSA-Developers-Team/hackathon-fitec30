const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({

  accountNumber: {
    type: Number,
    required: true
  },

  typeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AccountType',
    required: true
  },

  balance: {
    type: Number,
    required: true,
    default: 0
  },

  // balanceId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Balance',
  //   required: true
  // },

  clientId: {
    type: mongoose.Schema.Types.ObjectId,  
    ref: 'Client',
    required: true
  }

}, { collection: 'Accounts' })

const Account = mongoose.model('Account', AccountSchema)

module.exports = Account