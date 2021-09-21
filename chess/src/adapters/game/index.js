// Import api call adapter
import { get } from "../xhr";
import Centrifuge from "centrifuge";

export function getGameData(game_id) {
    return get(`/game/${game_id}`);
}

export function CentrifugeSetup(game_id, ChannelEventsListener) {
    // Setup Centrifugo Route
    const centrifuge = new Centrifuge(
        "wss://realtime.zuri.chat/connection/websocket"
    );

    // Connect to Centrifuge Server
    // centrifuge.connect();

    // Subscribe to room with ID: GameId on Centrifugo Server
    // centrifuge.subscribe(game_id, ChannelEventsListener());
}