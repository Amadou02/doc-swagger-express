const users = require('./../models/users')

exports.getAll = (req, res) => {
  return res.status(200).json({
    users,
  })
}

/**
 *
 * @param Object req
 * @param Object res
 * @returns Object
 */
exports.getOne = (req, res) => {
  console.log();
  const user = users.find((user) => user.id == req.params.id)
  return res.status(200).json(user)
}

/**
 *
 * @param Object req
 * @param Object res
 * @returns Object
 */
exports.deleteOne = (req, res) => {
  const newList = users.filter((user) => user.id == req.parms.id)
  return res.status(200).json(newList)
}

exports.create = (req, res) => {
  const newUser = {
    ...req.body,
    id: Math.floor(Math.random() * 1000),
  }

  users.push(newUser)

  return res.status(201).json(newUser)
}
