module.exports = {
  PORT: process.env.PORT || 5050,
  SOCKER_TOKEN:
    process.env.SOCKER_TOKEN ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NSIsImV4cCI6MTYzMTM1ODc1OH0.4c7pAxI0L242-35QYMF28mlujF9dbuZK6WRgxygrE7Q",
  SOCKET_URL:
    process.env.SOCKET_URL || "ws://localhost:8000/connection/websocket",
};
