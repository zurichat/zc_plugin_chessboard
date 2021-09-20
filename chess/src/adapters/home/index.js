// Import api call adapter
import { get } from "../xhr";

export function getAllGames() {
    return get("/game/all");
}