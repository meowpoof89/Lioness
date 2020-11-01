const economy = require('@features/economy')

module.exports = {
  commands: 'pay',
  minArgs: 2,
  maxArgs: 2,
  description: 'Pays a user from your account.',
  expectedArgs: "<Target user's @> <Amount of gold>",
  callback: async (message, arguments, text) => {
    const { guild, member } = message

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Please specify someone to give gold to.')
      return
    }

    const goldToGive = arguments[1]
    if (isNaN(goldToGive)) {
      message.reply('Please provide a valid number of gold to give.')
      return
    }

    const goldOwned = await economy.getGold(guild.id, member.id)
    if (goldOwned < goldToGive) {
      message.reply(`You do not have ${goldToGive} gold bar(s)!`)
      return
    }

    const remainingGold = await economy.addGold(
      guild.id,
      member.id,
      goldToGive * -1
    )
    const newBalance = await economy.addGold(
      guild.id, target.id, goldToGive
      )
    const newBalance = await economy.addGold(guild.id, target.id, goldToGive)

    message.reply(
      `You have given <@${target.id}> ${goldToGive} gold bar(s)! 
      They now have ${newBalance} gold bar(s) 
      and you have ${remainingGold} gold bar(s)!`
    )
  },
}
