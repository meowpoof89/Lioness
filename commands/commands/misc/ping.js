module.exports = {
  commands: 'ping',
  description: 'Test latency.',
  callback: (message, arguments, text, client) => {
    message.reply('Calculating ping...').then((resultMessage) => {
      const ping = resultMessage.createdTimestamp - message.createdTimestamp

      resultMessage.edit(`Pong! Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
    })
  },
}
