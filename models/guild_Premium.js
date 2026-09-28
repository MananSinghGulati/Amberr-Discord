const { model, Schema } = require('mongoose');

module.exports = model(
    'guildPremium',
    new Schema({
        Guild: String,
    })
);