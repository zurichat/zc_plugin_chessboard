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

    async getAllUsers(req, res) {
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
            const { body } = req;
            const user = await Users.update(req.params.id, body);
            console.log("user: ", user);
            res.status(200).send(appResponse(null, user, true));
        } catch (error) {
            console.log("error: ", error);
            // throw new CustomError("Could not update game with result", "500");
        }
    }

    // async userDelete(req, res) {
    //     try {
    //     } catch (error) {}
    // }
}

// Export Module
module.exports = new UserController();
