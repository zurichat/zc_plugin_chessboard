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
        type: "Plugin Information",
        plugin_info: {
          name: "Chess Plugin",
          description: [
            "Zuri.chat plugin",
            "Chess plugin for Zuri Chat that enables the users play chess within the application",
          ],
        },
        scaffold_structure: "Monolith",
        team: "HNG 8.0/Team Tesla",
        sidebar_url: "https://chess.zuri.chat/api/sideBar",
        ping_url: "https://chess.zuri.chat/api/ping",
        homepage_url: "https://chess.zuri.chat/",
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
          url: `https://chess.zuri.chat/game?id=${game._id}`,
          unread: game.messages ? game.messages.length : 0,
          badge_type: "info",
          members:
            game.spectators != null && game.spectators != undefined
              ? game.spectators.length + 2
              : 2,
          icon: "spear.png",
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
            url: "https://chess.zuri.chat",
            icon: "cdn.cloudflare.com/445345453345/hello.jpeg",
            action: "open",
          },
          {
            title: "Invite Player",
            url: "https://chess.zuri.chat/inviteplayer",
            icon: "cdn.cloudflare.com/445345453345/hello.jpeg",
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
