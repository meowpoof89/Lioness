const punishmentLogSchema = require('@schemas/punishment-log-schema')

module.exports = {
  aliases: ['punishmentlogs', 'punishlogs', 'punlog'],
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: "<Target user's @>",
  description: 'Loads punishment logs for a tagged user',
  permission: 'ADMINISTRATORS',
  callback: async (message, arguments) => {
    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to load punishments for.')
      return
    }

    const { guild } = message
    const { id } = target

    const results = await punishmentLogSchema.find({
      guildId: guild.id,
      userId: id,
    })

    let reply = 'Previous punishments:\n\n'

    for (const result of results) {
      reply += `${result.command} was ran at ${new Date(
        result.createdAt
      ).toLocaleTimeString()}\n\n`
    }

    message.reply(reply)
  },
}
