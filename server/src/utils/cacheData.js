const NodeCache = require("node-cache");

const cache = new NodeCache();

module.exports = {
    save: (key, data) => {
        cache.set(key, data);
    },
    retrieve: (key) => {
        return cache.get(key);
    },
    deleteData: (key) => {
        cache.del(key);
    },
};
