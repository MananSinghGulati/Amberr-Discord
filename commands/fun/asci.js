const Discord = require('discord.js')

const figlet = require ('figlet')
const util = require ('util')
let figletAsync = util.promisify(figlet);
module.exports = {
    name : 'ascii',
    category : '',
    description : '',
	premium: true,
	timeout: 0.1,

    
    run : async(client, message, args) => {
      
		const text = args.join(" ");
		if (!text || text.length > 20) {
			return message.error("fun/ascii:TEXT_MISSING");
		}

		const rendered = await figletAsync(text);
		message.channel.send("```" + rendered + "```");
    }
}
