const Discord  = require ('discord.js')

module.exports = {
  name: 'giverole',
  timeout: 0.1,

 run: (client,message,args) => {
     const targetUser = message.mentions.users.first()
    if (!targetUser) {
      message.reply('Please specify someone to give a role to.')
      return
    }

    args.shift()

    const roleName = args.join(' ')
    const { guild } = message

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    if (!role) {
      message.reply(`There is no role with the name "${roleName}"`)
      return
    }

    const member = guild.members.cache.get(targetUser.id)
    member.roles.add(role)

    message.reply(`that user now has the "${roleName}" role`)
  },
}