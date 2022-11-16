const Item = require('../models/Item')

/**
 * Finds all the documents from a collection in the DB
 * @param {Object} req [request body]
 * @param {Object} res [response body]
 */
const getItems = async (req, res) => {
  const result = await Item.find()
  res.json(result)
}

/**
 * Saves docuement on a collection from DB
 * @param {Object} req [request body]
 * @param {Object} res [response body]
 */
const addItem = async (req, res) => {
  if(!req.body.name || !req.body.category || !req.body.price || !req.body.shortName || !req.body.image){
    res.status(400).json( {msg: 'Please include all data.'} )
  }else{
    let newItem = {
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      shortName: req.body.shortName,
      image: req.body.image
    }
    const item = new Item(newItem)
    const result = await item.save()
    res.status(201).json( {msg: 'A new item has been created.', item: result, items: await Item.find()} )
  }
}

/**
 * Updates document from a DB given an id
 * @param {Object} req [request body]
 * @param {Object} res [response body]
 */
const updateItem = async (req, res) => {
  const exist = Item.findById(req.params.id)

  if(exist){
    const result = await Item.findOneAndUpdate({
      _id: req.params.id
    }, 
    {
      name: req.body.name ? req.body.name : exist.name,
      category: req.body.category ? req.body.category : exist.category,
      price: req.body.price ? req.body.price : exist.price,
      shortName: req.body.shortName ? req.body.shortName : exist.shortName,
      image: req.body.image ? req.body.image : exist.image
    })

    res.status(201).json({ msg: 'Item updated', item: result });
  }else{
    res.status(404).json({ msg: `no item with the id ${req.params.id} was found`});
  }
}

/**
 * Deletes document from DB given an id
 * @param {Object} req [request body]
 * @param {Object} res [response body]
 */
const deleteItem = async (req, res) => {
  const exist = Item.findById(req.params.id)

  if(exist){
    const result = await Item.findOneAndDelete({ _id: req.params.id })
    res.status(200).json( { msg: 'item deleted', item: result });  
  }else{
    res.status(404).json({ msg: `no item with the id ${req.params.id} was found`});
  }
}

module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem
}