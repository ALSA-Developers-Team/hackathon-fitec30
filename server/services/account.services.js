const Account = require('../models/account.js')

const findAll = async () => {
  const accounts = await Account.find();
  if(accounts) {
    return accounts;
  }

  return false;
}

function getAccountType(id)  {

  const AccountTypes = [
    {
      id: 1,
      name: 'Puntos',
      prefix: '4856',
    },
    {
      id: 2,
      name: 'Cuenta Corriente',
      prefix: '4857',
    },
    {
      id: 3,
      name: 'Cuenta de Ahorro',
      prefix: '4858',
    },

  ]

  return AccountTypes.find((accountType) => accountType.id === id)
}

const Accounts = [
  {
    id: 1,
    accountNumber: '4856123456',
    accountType: {
      id: 1,
      name: 'Puntos',
      prefix: '4856',
    },
    balnace: 1000,
    cartId: 1
  }
]

function findOne({clientId, accountTypeId}) {
  return Accounts.find((account) => account.id === clientId && account.accountType.id === accountTypeId)
}

// function insertOne(account) {
//   const newAccount = {
//     id: Accounts.length + 1,
//     accountNumber: account.accountNumber,
//     accountType: getAccountType(account.accountTypeId),
//     balance: account.balance,
//     cardId: account.cardId
//   }

//   Accounts.push(newAccount)

//   return true
// }

const insertOne = async (account) {
  const newAccount = {
    accountNumber: account.accountNumber,
    typeId: account.accountTypeId,
    balance: account.balance,
    clientId: account.clientId,
  }

  try {
    if (await Account.findOne({accountNumber: newAccount.accountNumber})){
      throw new Error('Account already exists')
    }

    const insertedId = await Account.insertOne(newAccount)
    return insertedId
  } catch (err){
    throw new Error(err)
  }
}

function create(account){

  
  Accounts.push(newAccount)

  return true
}

module.exports = { getAccountType, findOne, findAll, insertOne }