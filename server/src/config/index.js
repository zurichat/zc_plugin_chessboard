module.exports = {
  // Port to run the server on
  PORT: process.env.PORT || 5050,

  // Cetrifugo Credentials
  SOCKER_KEY:
    process.env.SOCKER_TOKEN || "58c2400b-831d-411d-8fe8-31b6e337738b",
  SOCKET_URL: process.env.SOCKET_URL || "https://realtime.zuri.chat/api",

  // Database Credentials
  DATABASE: {
    // Get Our PluginID from ENV or use the test_id
    PLUGIN_ID: process.env.PLUGIN_ID || "614101ec6173056af01b4cc2",
    // Get Our PluginID from ENV or use the test_id
    ORGANISATION_ID: process.env.ORGANISATION_ID || "6133c5a68006324323416896",
    // Endpoint for the database write operations
    ZC_CORE_DB_WRITE: "https://api.zuri.chat/data/write",
    // Endpoint for the database read operations
    ZC_CORE_DB_READ: "https://api.zuri.chat/data/read",
    // endpoint for deleting data
    DELETE_URL: "https://api.zuri.chat/data/delete",
  },

  // Fetch user zc_core endpoint
  USER_URL: "https://api.zuri.chat/users/",
};
