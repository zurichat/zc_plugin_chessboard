const Centrifuge = require("centrifuge");
const WebSocket = require("ws");
const piece_moved_handler = require("../socket/piece_moved_handler.socket");
const join_room_handler = require("../socket/join_room_handler.socket");
const { SOCKER_TOKEN, SOCKET_URL } = require("../config/index");

class CentrifugoController {
  static getInstance() {
    if (this.instance) return this.instance;

    this.instance = new CentrifugoController();
    return this.instance;
  }

  connect() {
    this.centrifuge = new Centrifuge(SOCKET_URL, {
      websocket: WebSocket,
    });

    this.centrifuge.setToken(SOCKER_TOKEN);

    this.centrifuge.on("connect", (ctx) => {
      console.log(`Connected to centrifugo messaging server at ${SOCKET_URL}`);
      this.context = ctx;
    });

    this.centrifuge.on("disconnect", (ctx) => {
      console.log(
        `Disconnected from centrifugo messaging server at ${SOCKET_URL}`
      );
      this.context = ctx;
    });
    this.centrifuge.connect();
    return this.centrifuge;
  }

  registerHandler(channel) {
    const subscription = this.centrifuge.subscribe(channel, (payload) => {
      this.routeChannelEvents(payload);
    });

    const existing = this.subscriptions.find((x) => x.channel == channel);
    if (existing) {
      this.subscriptions = this.subscriptions.filter(
        (x) => x.channel != channel
      );
    }

    this.subscriptions.push({
      channel,
      subscription,
    });
  }

  async sendMessage(channel, message) {
    const channelObj = this.subscriptions.find((x) => x.channel == channel);
    if (!channelObj) return false;

    await channelObj.subscription.publish(message);
  }

  routeChannelEvents(payload) {
    switch (payload.data.event) {
      case "piece_move":
        piece_moved_handler(payload);
        break;

      case "join_game":
        join_room_handler(payload);

      default:
        break;
    }
  }

  centrifuge;
  context;
  subscriptions = [];
  instance;
}

module.exports = CentrifugoController;
