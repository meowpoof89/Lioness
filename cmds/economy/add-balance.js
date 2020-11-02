const economy = require('@features/economy')
const Commando = require('discord.js-commando')

module.exports = class AddGoldCommand extends Commando.Command {
    constructor(client) {
      super(client, { 
        name: 'addgold',
        group: 'economy',
        memberName: 'addgold',
        description: 'Adds gold to a users account',
        userPermissions: ['ADMINISTRATOR'],
        argsType: 'multiple',
    })
  }

run = async (message, arguments) => {
    // l!addgold @ <gold>
    const target = message.mentions.users.first()

    if (!target) {
      message.reply('Please tag a user to add gold to.')
      return
    }

    const gold = arguments[1]
    if (isNaN(gold)) {
      message.reply('Please provide a valid number of gold.')
      return
    }

    const guildId = message.guild.id
    const userId = target.id

    const newGold = await economy.addGold(guildId, userId, gold)

    message.reply(
      `You have given <@${userId}> ${gold} gold bar(s). They now have ${newGold} gold bar(s)!`
    )
  }
}
