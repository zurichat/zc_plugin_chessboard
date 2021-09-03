const uuid = require('uuid');
const userSchema = require('../models/User.js');
const appResponse = require('../utils/response');
const DatabaseConnection = require('../db/database.helper');
const Users = new DatabaseConnection('User');

exports.userCreate = async (req, res) => {
  const { body } = req;
  body.id = uuid.v4();
  console.log(body);

  const user = await userSchema.validateAsync(body);
  const response = await Users.create(user);

  res.status(200).send(appResponse(null, response, true));
}

exports.getAllUsers = async (req, res) => {
  const response = await Users.fetchAll();

  res.status(200).send(appResponse(null, response, true, { count: response.length }));
}

exports.userDetails = async (req, res) => {
  const response = await Users.fetchOne( req.params.id );
  
  res.status(200).send(appResponse(null, response, true));
}

exports.userUpdate = async (req, res) => {

}

exports.userDelete = async (req, res) => {
  
}