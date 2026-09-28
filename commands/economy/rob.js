const passiveSchema = require ('../../models/passive')

module.exports = {
	name: "rob",
	premium:false,
	timeout: 1000*60*5,


	run: async (client,message,args) => { 
			
if (await passiveSchema.findOne( { User: message.author.id })) return message.reply ('You need to exit passive to use this command!')

		const member = message.mentions.members.first() ;
		const passiveMember = await passiveSchema.findOne( { User: member.id })

		if (passiveMember) return message.reply ('That user is passive!')
		const bal = await client.bal(member.id);
		const authorBal = await client.bal(message.author.id)
		const memberBal = await client.bal(member.id)
		
		const robAmount = Math.floor(Math.random() * bal );

		if (!member) {
			message.channel.send("Mention the user you want to rob , eh?");
		}
		if (memberBal === 0 ) {
			message.channel.send("You cant rob them, they dont have any coins!")
		}

		if(authorBal < 500) {
			message.channel.send("You need atleast 500 coins to rob someone!")
		}		 


	
		client.add(message.author.id, robAmount);
		client.rmv(member.id, parseInt(robAmount));
		message.channel.send(`You succesfully robbed ${robAmount} from ${member.user.username}! `)

	}
}