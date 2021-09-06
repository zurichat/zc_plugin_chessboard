// Custom Modules
const response = require("../utils/response");
const CustomError = require("../utils/custom-error");

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
            throw new CustomError("Could not fetch plugin information", "500");
        }
    }

    async getSideBarInfo(req, res) {
        try {
            let result = {
                new: "/api/chess/game-type",
                quickPlay: "/api/chess/game-type/quick-play",
                multiplayer: "/api/chess/game-type/multiplayer",
                singleplayer: "/api/chess/game-type/singleplayer",
                tournament: "/api/chess/tournament",
                createTournament: "/api/chess/tournament/create",
                joinTournament: "/api/chess/tournament/join",
                settings: "/api/chess/settings",
                join: "/api/chess/join-live",
            };
            res.status(200).send(response("SideBar Information Retrieved", result));
        } catch (error) {
            throw new CustomError("Could not fetch sidebar information", "500");
        }
    }
}

// Export Module
module.exports = new InformationController();
