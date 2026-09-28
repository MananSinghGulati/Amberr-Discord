const {
    Fight
} = require('weky');
module.exports = {
    name: 'fight',
    category: 'fun',
    description: '',
    timeout: 0.1,
    run: async (client, message, args) => {

    message.channel.send('This command has been disabled for now.')
    }
}