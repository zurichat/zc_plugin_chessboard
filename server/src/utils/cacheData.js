const NodeCache = require("node-cache");

const cache = new NodeCache();

module.exports = {
    saveToCache: (key, data) => {
        cache.set(key, data);
    },
    retrieveFromCache: (key) => {
        return cache.get(key);
    },
    deleteFromCache: (key) => {
        cache.del(key);
    },
};
