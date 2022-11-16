const mongoose = require('mongoose')

const balanceNameSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
    
  name: {
    type: String,
    required: true,
  },
}, { collection: 'balances' })

const BalanceName = mongoose.model('BalanceNames', balanceNameSchema)

module.exports = BalanceName