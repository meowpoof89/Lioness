
module.exports = {
      aliases: ['kick'], //optional
      description: 'Kicks a member from the discord server',
      clientPermissions: ['KICK_MEMBERS'],
      userPermissions: ['KICK_MEMBERS'],
    }

  run: async (message) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to kick')
      return
    }

    const { guild } = message

    const member = guild.members.cache.get(target.id)
    if (member.kickable) {
      member.kick()
      message.reply('That user has been kicked')
    } else {
      message.reply('I cannot kick that user')
    }
  }
