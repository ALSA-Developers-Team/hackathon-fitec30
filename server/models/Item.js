const mongoose = require('mongoose');
const Schema = mongoose.Schema

const itemSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    shortName: String,
    image: String,
}, { collection: 'items' })

const Item = mongoose.model('item', itemSchema)

module.exports = Item