const joi = require('joi')

/**
 * checks if a user for registration is valid
 * @param {any} data 
 * @returns a register validation result
 */
const registerValidation = data => {
  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required()
  })

  return schema.validate(data)
}

/**
 * checks if a user is valid for login
 * @param {*} data 
 * @returns a login validation result
 */
const loginValidation = data => {
  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
  })
  
  return schema.validate(data)
}

module.exports = {
  registerValidation,
  loginValidation
}