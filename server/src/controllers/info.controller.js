// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");
const DatabaseConnection = require("../db/database.helper");
const { DATABASE } = require("../config/index");

const GameRepo = new DatabaseConnection("001test_game");

class InformationController {
  async getPluginInfo(req, res) {
    try {
      let result = {
        plugin_id: "61448b7c92600a3c5318da53",
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

  async getSideBarInfo(req, res) {
    try {
      const { userId } = req.query;
      // fetch all data from db - Change this proceedure later
      const { data } = await GameRepo.fetchAll();
      if (!data)
        return res.status(404).send(response("data not available", {}, false));

      const usersGame = data.filter((game) => {
        console.log(game.spectators);
        return (
          // game.status == 1 &&
          game.owner.user_id == userId ||
          (game.opponent != undefined && game.opponent.user_id == userId) ||
          (game.spectators != undefined &&
            Array.isArray(game.spectators) &&
            game.spectators.find((spec) => spec.user_id == userId) != undefined)
        );
      });

      const joined_rooms = usersGame.map((game) => {
        return {
          title: `${game.owner.user_name} vs ${
            game.opponent ? game.opponent.user_name : "none"
          }`,
          id: game._id,
          url: `https://zuri.chat/chess/game/${game._id}`,
          unread: game.messages ? game.messages.length : 0,
          badge_type: "info",
          members:
            game.spectators != null && game.spectators != undefined
              ? game.spectators.length + 2
              : 2,
          icon_url: "https://cdn-icons-png.flaticon.com/128/5093/5093415.png",
          action: "open",
        };
      });

      const { PLUGIN_ID, ORGANISATION_ID } = DATABASE;
      const payload = {
        name: "Chess Plugin",
        description: "The Chess plugin",
        plugin_id: PLUGIN_ID,
        organisation_id: ORGANISATION_ID,
        user_id: userId,
        group_name: "Chess Games",
        show_group: true,
        joined_rooms,
        public_rooms: [
          {
            title: "Chess room",
            url: "https://zuri.chat/chess",
            icon_url: "https://www.svgrepo.com/show/12072/chess-board.svg",
            action: "open",
          },
        ],
      };

      return res
        .status(200)
        .send(response("Fetched sidebar data", payload, true));
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
