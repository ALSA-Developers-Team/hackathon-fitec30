const User = require('../models/User')
const { registerValidation, loginValidation } = require('../utils/validations/userValidation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


/**
 * registers a new user
 * @param {Object} req [request body]
 * @param {Object} res [response body]
 */
const registerUser = async (req, res) => {
	const { error } = registerValidation(req.body)
	if(error) return res.status(400).send({ msg: error.details[0].message.replace('\"', '') })

  const emailExist = await User.findOne({ email: req.body.email })
  if(emailExist) return res.status(400).send({ msg: 'email already exists' })

  const salt = await bcrypt.genSalt(10)
  const hashedPasword = await bcrypt.hash(req.body.password, salt)

	const user = new User({
		name: req.body.name,
    email: req.body.email,
    password: hashedPasword
	})
  try{
    const newUser = await user.save()
    res.status(201).send({ 
      msg: 'A new user has been created',
      user: newUser._id
    })
  }catch(err){
    console.error(err)
  }
}

const loginUser = async (req, res) => {
  const { error } = loginValidation(req.body)
	if(error) return res.status(400).send({ msg: error.details[0].message.replace('\"', '') })

  const user = await User.findOne({ email: req.body.email })
  if(!user) return res.status(400).send({ msg: 'email is wrong' })

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if(!validPassword) return res.status(400).send({ msg: 'password is wrong' })

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
  res.header({'auth-token': token}).status(200).send({ msg: 'succesful log in', token: token})
}


module.exports = {
	registerUser,
  loginUser
}