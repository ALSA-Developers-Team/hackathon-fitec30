const mongoose = require('mongoose')

const AccountTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  prefix: {
    type: String,
    minlength: 4,
    maxlength: 4,
  }

}, { collection: 'AccountTypes' })

const AccountType = mongoose.model('AccountType', AccountTypeSchema)

module.exports = AccountType