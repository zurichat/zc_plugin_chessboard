const axios = require("axios");
const databaseWriteUrl = "https://zccore.herokuapp.com/data/write";
const databaseReadUrl = "https://zccore.herokuapp.com/data/read";

class DatabaseConnectionResult {
  constructor(collection_name) {
    this.data = {
      plugin_id: "6132482f569dbbb7ce5b4fe5", //registered chess plug-in
      organization_id: "612a3a914acf115e685df8e3",
      collection_name: "result",
      bulk_write: false,
      object_id: "",
      filter: {},
      payload: {},
    };
  }

  async createResult(payload) {
    this.data.payload = payload;
    this.data.payload.createdAt = new Date().toISOString();
    console.log(this.payload);
    const response = await axios.post(
      databaseWriteUrl,
      JSON.stringify(this.data)
    );
    console.log(response);
    return response.data;
  }

  async fetchAllResult() {
    const response = await axios.get(
      `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}`
    );

    return response.data;
  }

  async fetchUserResult(id) {
    const response = await axios.get(
      `${databaseReadUrl}/${this.data.plugin_id}/${this.data.collection_name}/${this.data.organization_id}?object_id=${id}`
    );

    return response.data;
  }
}

module.exports = DatabaseConnectionResult;
