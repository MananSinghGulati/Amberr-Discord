const { MessageEmbed } = require('discord.js')
const https = require('https');
const Discord = require('discord.js')
const url = 'https://www.reddit.com/r/dankmemes/hot/.json?limit=100'


module.exports = {
    name : 'meme',
    category : 'fun',
    description : 'r/dankmemes',
	timeout: 5,

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
		
		
try {
        https.get(url, (result) => {
            let body = ''
            result.on('data', (chunk) => {
                body += chunk
            })

            result.on('end', () => {
                let response = JSON.parse(body)
                let index = response.data.children[Math.floor(Math.random() * 99) + 1].data
					     let  subRedditName = index.subreddit_name_prefixed
						   let title = index.title
                if (index.post_hint !== 'image') {
let link = 'https://reddit.com' + index.permalink;
                  
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)
	
                    message.channel.send(textembed)
                }

                let image = index.preview.images[0].source.url.replace('&amp;', '&')
              
                let link = 'https://reddit.com' + index.permalink
           

                if (index.post_hint !== 'image') {
                    const textembed = new Discord.MessageEmbed()
                        .setTitle(subRedditName)
                        .setColor(9384170)
                        .setDescription(`[${title}](${link})\n\n${text}`)
                        .setURL(`https://reddit.com/${subRedditName}`)

                    message.channel.send(textembed)
                }
                console.log(image);
                const imageembed = new Discord.MessageEmbed()
                    .setTitle(subRedditName)
                    .setImage(image)
                    .setColor(9384170)
                    .setDescription(`[${title}](${link})`)
                    .setURL(`https://reddit.com/${subRedditName}`)
                message.channel.send(imageembed)
            }).on('error', function (e) {
                console.log('Got an error: ', e)
            })
        })
} catch {
message.channel.send(`Could not find this subreddit`)
}

    }
}
