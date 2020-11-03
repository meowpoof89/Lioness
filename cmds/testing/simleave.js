
module.exports = {
      aliases: ['leave', 'simleave'],
      userPermissions: ['ADMINISTRATOR'],
      description: 'Simulates a leave',
    
  }

  run = (message) => {
    this.client.emit('guildMemberLeave', message.member)
  }

