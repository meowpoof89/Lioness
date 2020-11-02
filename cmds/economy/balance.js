const Commando = require('discord.js-commando')
const economy = require('@features/economy')

module.exports = class BalanceCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'balance',
      group: 'economy',
      memberName: 'balance',
      description: 'Checks balance of user',
    })
  }

  async run(message) {
    const target = message.mentions.users.first() || message.author
    const targetId = target.id

    const guildId = message.guild.id
    const userId = target.id

    const gold = await economy.getGold(guildId, userId)

    message.reply(`That user has ${gold} gold!`)


    }
  }









// module.exports = {
//   commands: ['balance', 'bal', 'gold'],
//   maxArgs: 1,
//   expectedArgs: "[Target user's @]",
//   description: "Displays a user's gold.",
//   callback: async (message) => {
//     const target = message.mentions.users.first() || message.author
//     const targetId = target.id

//     const guildId = message.guild.id
//     const userId = target.id

//     const gold = await economy.getGold(guildId, userId)

//     message.reply(`That user has ${gold} gold!`)
//   },
// }
