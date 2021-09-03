const uuid = require("uuid");
const userSchema = require("../models/User.js");
const appResponse = require("../utils/response");
const DatabaseConnection = require("../db/database.helper");
const Users = new DatabaseConnection("User");
const CustomError = require("../utils/custom-error");

class UserController {
  async userCreate(req, res) {
    try {
      const { body } = req;
      body.id = uuid.v4();
      console.log(body);

      const user = await userSchema.validateAsync(body);
      const response = await Users.create(user);

      res.status(200).send(appResponse(null, response, true));
    } catch (error) {
      throw new CustomError("Could not create user", "500");
    }
  }

  async getAllZCUsers(req, res) {
    try {
      const response = await Users.fetchAll();
      res
        .status(200)
        .send(appResponse(null, response, true, { count: response.length }));
    } catch (error) {
      throw new CustomError("Could not fetch users information", "500");
    }
  }
  async userDetails(req, res) {
    try {
      const response = await Users.fetchOne(req.params.id);
      res.status(200).send(appResponse(null, response, true));
    } catch (error) {
      throw new CustomError("Could not fetch user details", "500");
    }
  }

  async userUpdate(req, res) {
    try {
      const response = await Users.update(req.params.id, req.body);
      res.status(200).send(appResponse(null, response, true));
    } catch (error) {
      throw new CustomError("Could not update user details", "500");
    }
  }

  async userDelete(req, res) {
    try {
      // console.log(req.params.id);
      const response = await Users.delete(req.params.id);
      res.status(200).send(appResponse(null, response, true));
    } catch (error) {
      throw new CustomError("Could not delete user details", "500");
    }
  }
}

// Export Module
module.exports = new UserController();
