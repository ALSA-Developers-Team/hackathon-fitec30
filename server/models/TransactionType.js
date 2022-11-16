const mongoose = require('mongoose')

const transactionTypeSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

}, { collection: 'TransactionTypes' })

const TransactionType = mongoose.model('TransactionType', transactionTypeSchema)

module.exports = TransactionType