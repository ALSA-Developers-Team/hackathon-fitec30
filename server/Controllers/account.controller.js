const MessageUtils = require('../utils/messages.js')
const AccountService = require('../services/account.services.js')

const getAccounts = async (req, res) => {
  const accounts = await AccountService.findAll()
  if (accounts) {
    res.status(200).json(MessageUtils.sendResponse(true,200,"Accounts found", accounts))
  }else{
    res.status(404).json(MessageUtils.sendResponse(false,404,"Accounts not found", null))
  }
}

const setAccount = async (req, res) => {
  try{
    const account = createAccount(req.body)
    
  }catch(err){
    res.status(500).json(MessageUtils.sendResponse(false,500,err, null))
  }
}


// METHODSSSS

const generateAccountNumber = (accountTypeId) => {
  const accountType = AccountService.getAccountType(accountTypeId)
  if(!accountType) throw new Error('Account type not found')
  const random = Math.floor(Math.random() * 1000000)
  return `${accountType.prefix}${random}`
}

const createAccount = ({clientId, accountTypeId, cardId = null, balance = 0}) => {
  //validate clientId, accountTypeId
  if(!clientId || !accountTypeId) throw new Error('Invalid client or account type')
  if(AccountService.findOne({clientId, accountTypeId})) throw new Error('Account already exists')
  const accountNumber = generateAccountNumber(accountTypeId)
  
  const newAccount = {
    clientId,
    accountTypeId,
    accountNumber,
    cardId,
    balance
  }

  return AccountService.insertOne(newAccount)
}


module.exports = {
  getAccounts
}

