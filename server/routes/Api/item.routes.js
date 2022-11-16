const express = require('express');
const router = express.Router()

const verify = require('../../utils/security/verifyToken')

const { getItems, addItem, updateItem, deleteItem } = require('../../Controllers/item.controller')

router.get('/', verify, getItems)
router.delete('/:id', verify, deleteItem)
router.put('/:id', verify, updateItem)
router.post('/', verify, addItem)


module.exports = router