const axios = require("axios");
// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const DatabaseConnection = require("../db/database.helper");
const { DATABASE } = require("../config/index");
const { COOKIES } = require("../config/index");
const { generateImage } = require("../utils/imageHelper");

class InformationController {
  async getPluginInfo(req, res) {
    try {
      let result = {
        plugin_id: "6167df71f7dd1451ae6addc5",
        name: "Chess Plugin",
        description:
          "Ease stress in Zuri's chess room while running business deals, socialize with friends and colleagues by engaging in a friendly chess match. You could also decide to spectate a chess game and make comments while you watch.",
        category: "Games",
        pictures: [
          "https://res.cloudinary.com/kyloren/image/upload/v1631878728/Chess%20MarketPlace/intro_gk0icz.png",
          "https://res.cloudinary.com/kyloren/image/upload/v1631878727/Chess%20MarketPlace/Intergration_xamqr5.png",
          "https://res.cloudinary.com/kyloren/image/upload/v1631878727/Chess%20MarketPlace/Invite_cnhhtd.jpg",
          "https://res.cloudinary.com/kyloren/image/upload/v1631878727/Chess%20MarketPlace/Comment_ttyhrw.png",
          "https://res.cloudinary.com/kyloren/image/upload/v1631878727/Chess%20MarketPlace/Watch_qgc9dz.png",
        ],
        icon_url:
          "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
        scaffold_structure: "Single SPA",
        version: "v1.0",
        developer_name: "HNG 8.0/Team Tesla",
        developer_email: "hello@zuri.com",
        sidebar_url: "https://chess.zuri.chat/api/v1/sideBar",
        ping_url: "https://chess.zuri.chat/api/v1/ping",
        homepage_url: "https://chess.zuri.chat/",
        install_url: "https://chess.zuri.chat/",
      };
      res.status(200).send(response("Plugin Information Retrieved", result));
    } catch (error) {
      throw new CustomError(
        `Could not fetch plugin information: ${error}`,
        "500"
      );
    }
  }

  async sideBarInfo(organisation_id, user_id) {
    const org = organisation_id;
    const user = user_id;

    // fetch all data from db - Change this proceedure later - Why change it? There are just 6 of them
    const GameRepo = new DatabaseConnection("003test_game", org);
    const { data } = await GameRepo.fetchAll();

    // pick running games
    const filtered = data.filter((x) => {
      return (
        x.status !== 2 &&
        (x.owner.user_id == user ||
          (x.opponent && x.opponent.user_id == user) ||
          x.spectators.filter((y) => y.user_id == user).length > 0)
      );
    });

    const joined_rooms = [];
    for (let game of filtered) {
      // generate dynamic sidebar icons
      const imageName = await generateImage(
        game.owner.image_url ? game.owner.image_url : null,
        game.opponent ? game.opponent.image_url : null,
        game._id,
        org
      );

      // add to room collection
      joined_rooms.push({
        room_name: `${game.owner.user_name} vs ${
          game.opponent ? game.opponent.user_name : "-----"
        }`,
        room_image: `https://chess.zuri.chat/${imageName}`,
        room_url: `/chess/game/${game._id}`,
        unread: 1,
      });
    }

    const { PLUGIN_ID } = DATABASE;
    const payload = {
      name: "Chess Plugin",
      description: "The Chess plugin",
      category: "games",
      plugin_id: PLUGIN_ID,
      organisation_id: org,
      user_id: user,
      group_name: "Chess Games",
      show_group: false,
      public_rooms: [
        {
          room_name: "Chess room",
          room_image: "https://www.svgrepo.com/show/12072/chess-board.svg",
          room_url: "/chess",
        },
      ],
      joined_rooms: [
        // To be removed - why?
        {
          room_name: "Main Chess Room",
          room_image: "https://www.svgrepo.com/show/12072/chess-board.svg",
          room_url: "/chess",
        },
        // To be removed - why?
        ...joined_rooms,
      ],
    };

    return payload;
  }

  async installChess(req, res) {
    try {
      const { org_id, user_id } = req.body;
      // const org_id = "61675900fdb02e1855223968";
      // const user_id = "61675901fdb02e1855223969";

      const url = `https://api.zuri.chat/organizations/${org_id}/plugins`;

      // Build request to zuri_core install url
      const payload = {
        plugin_id: DATABASE.PLUGIN_ID,
        user_id: user_id,
      };
      const headers = {
        "Content-Type": "application/json",
        Cookie: COOKIES,
      };
      const { data } = await axios.post(url, payload, { headers });

      if (data.status === 200) {
        return res
          .status(200)
          .send(
            response(
              "Plugin has been installed",
              { redirect_url: "/chess" },
              true
            )
          );
      }
      return res.status(400).send(response("could not redirect", null, false));
    } catch (error) {
      throw new CustomError(`Could not install plugin: ${error}`, "500");
    }
  }

  async uninstallChess(req, res) {
    try {
      // const { org_id, user_id } = req.body;
      const org_id = "61675900fdb02e1855223968";
      const user_id = "6145c1a6285e4a18402073ee";

      const url = `https://api.zuri.chat/organizations/${org_id}/plugins`;

      // Build request to zuri_core install url
      const payload = {
        plugin_id: DATABASE.PLUGIN_ID,
        user_id: user_id,
      };
      const headers = {
        "Content-Type": "application/json",
        Cookie: COOKIES,
      };
      const { data } = await axios.post(url, payload, { headers });
      if (data.status === 200) {
        return res
          .status(200)
          .send(response("plugin successfully uninstalled", null, true));
      }
      return res
        .status(400)
        .send(response("Organisation does not exist", null, false));
    } catch (error) {
      throw new CustomError(`Plugin Could not be uninstalled: ${error}`, "500");
    }
  }

  async getSideBarInfo(req, res) {
    try {
      const { user, org } = req.query;

      const payload = await new InformationController().sideBarInfo(org, user);

      // Just return the payload
      return res.status(200).json(payload);
    } catch (error) {
      throw new CustomError(
        `Could not fetch sidebar information: ${error}`,
        "500"
      );
    }
  }
}

// Export Module
module.exports = new InformationController();
