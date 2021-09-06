module.exports = {
  // Port to run the server on
  PORT: process.env.PORT || 5050,
  
  // Cetrifugo Credentials
  SOCKER_KEY:
    process.env.SOCKER_TOKEN || "58c2400b-831d-411d-8fe8-31b6e337738b",
  SOCKET_URL: process.env.SOCKET_URL || "https://realtime.zuri.chat/api",

  // Database Credentials
  DATABASE : {
    // Get Our PluginID from ENV or use the test_id
    PLUGIN_ID: process.env.PLUGIN_ID || "6132482f569dbbb7ce5b4fe5",
    // Get Our PluginID from ENV or use the test_id
    ORGANISATION_ID: process.env.ORGANISATION_ID || "612a3a914acf115e685df8e3",
    // Endpoint for the database write operations
    ZC_CORE_DB_WRITE = "https://zccore.herokuapp.com/data/write",
    // Endpoint for the database read operations
    ZC_CORE_DB_READ = "https://zccore.herokuapp.com/data/read",
  }
};
