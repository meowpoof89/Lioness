const path = require('path')

module.exports = {
      aliases: ['play', 'audio', 'pa'],
      description: 'Plays some audio',
    }

  run: async(message) => {
    const { voice } = message.member

    if (!voice.channelID) {
      message.reply('You must be in a voice channel')
      return
    }

    voice.channel.join().then((connection) => {
      connection.play(path.join(__dirname, 'Intro.m4a'))
    })
  }

