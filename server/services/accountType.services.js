const AccountType = require('../models/AccountType')

/**
 * Finds all the documents from a collection in the DB
 * @param {Object} req [request body]
 * @param {Object} res [response body]
 */
const getType = async () => {
  const result = await Item.find()
  return res.json(result)
}

/**
 * Saves docuement on a collection from DB
 * @param {Object} req [request body]
 * @param {Object} res [response body]
 */
const addType = async (type) => {
  if(!type.name || !type.prefix){
    res.status(400).json( {msg: 'Please include all data.'} )
  }else{
    let newType = {
      name: type.name,
      prefix: type.prefix,
    }
    const type = new AccountType(newType)
    const result = await type.save()
    return res.status(201).json( {msg: 'A new item has been created.', type: result, types: await AccountType.find()} )
  }
}

/**
 * Updates document from a DB given an id
 * @param {Object} req [request body]
 * @param {Object} res [response body]
 */
const updateType = async (id, type) => {
  const exist = AccountType.findById(id)

  if(exist){
    const result = await AccountType.findOneAndUpdate({
      _id: id
    }, 
    {
      name: type.name ? type.name : exist.name,
      prefix: type.prefix ? req.body.prefix : exist.prefix,
    })

    return res.status(201).json({ msg: 'type updated', type: result });
  }else{
    return res.status(404).json({ msg: `no type with the id ${req.params.id} was found`});
  }
}

/**
 * Deletes document from DB given an id
 * @param {Object} req [request body]
 * @param {Object} res [response body]
 */
const deleteType = async (id) => {
  const exist = AccountType.findById(id)

  if(exist){
    const result = await AccountType.findOneAndDelete({ _id: id })
    return res.status(200).json( { msg: 'type deleted', type: result });  
  }else{
    return res.status(404).json({ msg: `no type with the id ${id} was found`});
  }
}

module.exports = {
  getType,
  addType,
  updateType,
  deleteType
}