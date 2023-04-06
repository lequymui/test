const NodeCache = require('node-cache')

const config = {
    prefix: '/',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config
