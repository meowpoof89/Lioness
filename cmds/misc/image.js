const fs = require('fs')
const path = require('path')
const { MessageAttachment } = require('discord.js')

module.exports = {
      aliases: ['image', 'photo'],
      description: 'Sends an image',
    }

  run = (message) => {
    const image = fs.readFileSync(path.join(__dirname, 'image.jpg'))

    const attachment = new MessageAttachment(image)

    message.reply('Here is an image', attachment)
  }

