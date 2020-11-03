const suggestionSchema = require('@schemas/suggestions-schema')
const { fetchSuggestionChannels } = require('@features/suggestions')

module.exports = {
      aliases: ['setsug', 'setsuggestion'],
      userPermissions: ['ADMINISTRATOR'],
      description: 'Sets the suggestion channel',
    
  }

  run = async (message) => {
    const channel = message.mentions.channels.first() || message.channel

    const {
      guild: { id: guildId },
    } = message
    const { id: channelId } = channel

    await suggestionSchema.findOneAndUpdate(
      {
        _id: guildId,
      },
      {
        _id: guildId,
        channelId,
      },
      {
        upsert: true,
      }
    )

    message.reply(`The suggestions channel has been set to ${channel}`)

    fetchSuggestionChannels(guildId)
  
}
