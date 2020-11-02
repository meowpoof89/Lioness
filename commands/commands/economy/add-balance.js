// const economy = require('@features/economy')
// const Commando = require('discord.js-commando')


// module.exports = {
//   commands: ['addbalance', 'addbal', 'addgold'],
//   minArgs: 2,
//   maxArgs: 2,
//   expectedArgs: "<The target's @> <gold amount>",
//   permissionError: 'You must be an administrator to use this command.',
//   permissions: 'ADMINISTRATOR',
//   description: 'Gives a user gold.',
//   callback: async (message, arguments) => {
//     const mention = message.mentions.users.first()

//     if (!mention) {
//       message.reply('Please tag a user to add gold to.')
//       return
//     }

//     const gold = arguments[1]
//     if (isNaN(gold)) {
//       message.reply('Please provide a valid number of gold.')
//       return
//     }

//     const guildId = message.guild.id
//     const userId = mention.id

//     const newGold = await economy.addGold(guildId, userId, gold)

//     message.reply(
//       `You have given <@${userId}> ${gold} gold bar(s). They now have ${newGold} gold bar(s)!`
//     )
//   },
// }
