const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({

  description: {
    type: String,
    required: true,
  },

  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TransactionType',
    required: true,
  },

  ammount: {
    type: Number,
    required: true
  }

}, { collection: 'Transactions' })

const Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction