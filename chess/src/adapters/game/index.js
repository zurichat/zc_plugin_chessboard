// Import api call adapter
import { get, post } from "../xhr";

export function getAllGames() {
    return get("/game/all").data;
}