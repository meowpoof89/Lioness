const thanksLeaderboardSchema = require('@schemas/thanks-leaderboard-schema')

module.exports = {
      aliases: ['setleaderboard', 'leader'],
      userPermissions: ['ADMINISTRATOR'],
      description: 'Sets up a thanks leaderboard',
    
  }

  run = async (message) => {
    const { guild, channel } = message
    const guildId = guild.id
    const channelId = channel.id

    await thanksLeaderboardSchema.findOneAndUpdate(
      {
        _id: guildId,
        channelId,
      },
      {
        _id: guildId,
        channelId,
      },
      {
        upsert: true,
      }
    )

    message.reply('Thanks leaderboard set!').then((message) => {
      message.delete({
        timeout: 1000 * 3,
      })
    })
    message.delete()
  
}
