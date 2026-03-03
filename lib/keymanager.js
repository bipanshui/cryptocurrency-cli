const ConfigStore = require("configstore").default;
const pkg = require("../package.json");

class KeyManager {
    constructor() {
        this.conf =  new ConfigStore(pkg.name);
    }

    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }

    getKey() {
        const key = this.conf.get('apiKey')

        if (!key) {
            throw new Error("API key is not set");
        }

        return key;
    }
}

module.exports = KeyManager;
