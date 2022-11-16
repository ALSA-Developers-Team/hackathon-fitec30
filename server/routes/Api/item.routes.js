const express = require('express');
const router = express.Router()

const { getItems, addItem, updateItem, deleteItem } = require('../../Controllers/item.controller')

router.get('/', getItems)
router.delete('/:id', deleteItem)
router.put('/:id', updateItem)
router.post('/', addItem)


module.exports = router