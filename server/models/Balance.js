const mongoose = require('mongoose')

const balanceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },

  ammount: {
    type: Number,
    required: true
  },

  balanceNameId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'BalanceName',
    required: true
  }

}, { collection: 'balances' })

const Balance = mongoose.model('Balance', balanceSchema)

module.exports = Balance