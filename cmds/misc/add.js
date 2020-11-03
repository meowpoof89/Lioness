const Commando = require('discord.js-commando')

module.exports = {

      description: 'Adds numbers together',
      argsType: 'multiple',
    }

  async(message, args) => {
    let sum = 0

    for (const arg of args) {
      sum += parseInt(arg)
    }

    message.reply(`The sum is ${sum}`)
  }
