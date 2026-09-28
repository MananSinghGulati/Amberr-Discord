// const express = require('express');
// const app = express();
// const port = process.env.port || 3000;

// // creating server for our app
// app.get('/', (req, res) => res.send("Working"));

// // app.listen(port, () => console.log(`Your app is listining at http://localhost${port}`));

//_______________________________________________________________________________________
const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({ disableMentions: 'everyone' });
const mongo = require ('mongoose')
const { AutoPoster } = require('topgg-autoposter')

// const ap = AutoPoster(process.env.TOPTOKEN, client)

// ap.on('posted', () => {
//   console.log('Posted stats to Top.gg!')
// })

mongo.connect(process.env.MONGOPATH, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
    useFindAndModify: false,
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token

module.exports = client;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
 require('discord-buttons')(client)

client.login(process.env.TOKEN)