module.exports = (client) => {
  const channelId = '766494950522748988'

  const updateMembers = (guild) => {
    const channel = guild.channels.cache.get(channelId)
    if (channel) {
      channel.setName(`Members: ${guild.memberCount.toLocaleString()}`)
      
    }
  }

  client.on('guildMemberAdd', (member) => updateMembers(member.guild))
  client.on('guildMemberRemove', (member) => updateMembers(member.guild))

  const guild = client.guilds.cache.get('759856857690669098')
  updateMembers(guild)
}
