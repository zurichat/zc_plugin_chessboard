const axios = require("axios");
const databaseWriteUrl = "https://zccore.herokuapp.com/data/write";
const databaseReadUrl = "https://zccore.herokuapp.com/data/read";

class DatabaseConnection {
    constructor(collection_name) {
        collection_name;
        this.data = {
            plugin_id: "6132482f569dbbb7ce5b4fe5", //registered chess plug-in
            organization_id: "612a3a914acf115e685df8e3",
            collection_name: "chess_room",
            bulk_write: false,
            object_id: "",
            filter: {},
            payload: {},
        };
    }

    async create(payload) {
        this.data.payload = payload;
        this.data.payload.createdAt = new Date().toISOString();

        const response = await axios.post(
            databaseWriteUrl,
            JSON.stringify(this.data)
        );

        console.log(response.data);
        return response.data;
    }

    async fetchAll() {
        const response = await axios.get(
            `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`
        );

        return response.data;
    }

    async fetchOne(id) {
        const response = await axios.get(
            `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}?object_id=${id}`
        );

        return response.data;
    }

    async update(id, payload) {
        this.data.payload = payload;
        this.data.object_id = id;

        const response = await axios.put(
            databaseWriteUrl,
            JSON.stringify(this.data)
        );

        return response.data;
    }
}

module.exports = DatabaseConnection;
