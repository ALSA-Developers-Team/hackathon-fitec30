const mongoose = require('mongoose')

const CardSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },

  cardNumber:{
    type: String,
    required: true
  },

  expireDate: {
    type: Date,
    required: true,
  },

  cvv:{
    type: Number,
    required: true,
    min : 101,
    max : 999
  }
}, { collection: 'cards' })

const Card = mongoose.model('Card', CardSchema)

module.exports = Card