const roles = ['Admin', 'BOT']
const prefix = process.env.PREFIX
module.exports = (client) => {
  const channelId = '766031384980095046'//mod-log channel

  client.on('message', (message) => {
    const { guild, content, member } = message

    if (message.author.bot) {
      return
    }
    if (message.author.id === '262668355520036874'){
      return
    }
    if (!message.content.startsWith(prefix)){
      return
    }
    const hasRole = member.roles.cache.find((role) => {
      return roles.includes(role.name)
    })

    if (hasRole) {
      const channel = guild.channels.cache.get(channelId)
      if (channel) {
        channel.send(`<@${member.id}> said this:"${content}"`)
      }
    }
  })
}
