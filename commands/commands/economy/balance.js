const economy = require('@features/economy')


module.exports = {
  commands: ['balance', 'bal', 'gold'],
  maxArgs: 1,
  expectedArgs: "[Target user's @]",
  description: "Displays a user's gold.",
  callback: async (message) => {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const gold = await economy.getGold(guildId, userId, gold)

    message.reply(`That user has ${gold} gold!`)
  },
}
