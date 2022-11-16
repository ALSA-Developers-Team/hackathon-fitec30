const express = require('express');
const router = express.Router()

//const verify = require('../../utils/security/verifyToken')

const { createAccount, getAccounts } = require('../../Controllers/account.controller')

router.get('/', getAccounts)
// router.delete('/:id', deleteItem)
// router.put('/:id', updateItem)
// router.post('/', createAccount)


module.exports = router