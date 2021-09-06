// Package Modules
const axios = require("axios");

// Custom Modules
const { DATABASE } = require("../config");
const CustomError = require("../utils/custom-error");

class DatabaseConnection {

  // Set Write Endpoint
  DB_WRITE_URL = DATABASE.ZC_CORE_DB_WRITE;

  // Set Read Endpoint
  DB_READ_URL = DATABASE.ZC_CORE_DB_READ;

  // Set the default values for the DB operations
  DB_DEFAULTS_CONFIG = {
    plugin_id: DATABASE.PLUGIN_ID,
    organization_id: DATABASE.ORGANISATION_ID,
    bulk_write: false,
    object_id: "",
    filter: {},
    payload: {}
  }

  // First, we set the collection to work with when starting the DB connection
  constructor(collection_name) {
    // Set the name of the collection to use
    this.DB_DEFAULTS_CONFIG.collection_name = collection_name;
  }

  // Create
  async create(payload) {
    // Set the payload
    this.DB_DEFAULTS_CONFIG.payload = payload;

    try {
      // Make the request
      const response = await axios.post(this.DB_READ_URL, JSON.stringify(this.DB_DEFAULTS_CONFIG));

      // Return the response
      return response.data;
    } catch (error) {
      throw new CustomError(`Unable to Connect to Zuri Core DB [CREATE]: ${error}`, "500");
    }
  }

  // Fetch a single object from the DB
  async fetchOne(object_id) {
    try {
      // Make the request
      const response = await axios.get(`${this.DB_READ_URL}/${this.DB_DEFAULTS_CONFIG.plugin_id}/${this.DB_DEFAULTS_CONFIG.collection_name}/${this.DB_DEFAULTS_CONFIG.organization_id}?_id=${object_id}`);

      // Return the response
      return response.data;
    } catch (error) {
      throw new CustomError(`Unable to Connect to Zuri Core DB [READ ONE]: ${error}`, "500");
    }
  }

  // Fetches all objects from the DB
  async fetchAll() {
    try {
      // Make the request
      const response = await axios.get(`${this.DB_READ_URL}/${this.DB_DEFAULTS_CONFIG.plugin_id}/${this.DB_DEFAULTS_CONFIG.collection_name}/${this.DB_DEFAULTS_CONFIG.organization_id}`);

      // Return the response
      return response.data;
    } catch (error) {
      throw new CustomError(`Unable to Connect to Zuri Core DB [READ ALL]: ${error}`, "500");
    }
  }

  // Update
  async update(object_id, payload) {
    // Set the payload
    this.DB_DEFAULTS_CONFIG.payload = payload;
    // Set the ID of the object to be updated
    this.DB_DEFAULTS_CONFIG.object_id = object_id;

    try {
      // Make the request
      const response = await axios.put(this.DB_READ_URL, JSON.stringify(this.DB_DEFAULTS_CONFIG));

      // Return the response
      return response.data;
    } catch (error) {
      throw new CustomError(`Unable to Connect to Zuri Core DB [UPDATE]: ${error}`, "500");
    }
  }

  // Delete - Not Implemented in Zuri Core API yet
  async delete(object_id, payload) {
    // Set the payload
    this.DB_DEFAULTS_CONFIG.payload = payload;
    // Set the ID of the object to be deleted
    this.DB_DEFAULTS_CONFIG.object_id = object_id;

    try {
      // Make the request
      const response = await axios.put(this.DB_READ_URL, JSON.stringify(this.DB_DEFAULTS_CONFIG));

      // Return the response
      return response.data;
    } catch (error) {
      throw new CustomError(`Unable to Connect to Zuri Core DB [DELETE]: ${error}`, "500");
    }
  }
}

module.exports = DatabaseConnection;