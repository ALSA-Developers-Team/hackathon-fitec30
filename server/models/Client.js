const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true,
  },

  firstlastnam: {
    type: String,
    required: true,
  },

  secondlastname: {
    type: String,
    required: true,
  }
}, { collection: 'clients' })

const Client = mongoose.model('Client', clientSchema)

module.exports = Client