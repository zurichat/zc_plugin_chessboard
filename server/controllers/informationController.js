class InformationController {
  static HandleInformation(req, res, next) {
    try {
      res.status(200).json({
        status: 
          "Success",
        type:
          "Plugin Information",
        plugin_info:  {
          name: "Chess Plugin",
          description: ["Zuri.chat plugin", "Chess plugin for Zuri Chat that enables the users play chess within the application"]
        },
        scaffold_structure: "Monolith",
        Team: "HNG 8.0/Team Tesla",
        sidebar_url: "https://chess.zuri.chat/api/sideBar",
        homepage_url: "https://chess.zuri.chat/",
        ping_url: "https://chess.zuri.chat/api/ping"
      });
    } catch (e) {
      res.status(500).send("Could not fetch plugin information");
    }
  }

  static HandleSideBarInfo(req, res, next) {
    const sidebars = {
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

    res.status(200).json(sidebars);
  }
}

module.exports = InformationController;
