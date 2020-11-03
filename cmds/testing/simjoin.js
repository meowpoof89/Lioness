
module.exports =  {
      aliases: ['join', 'simjoin'],
      userPermissions: ['ADMINISTRATOR'],
      description: 'Simulates a join',
    
  }

  run = (message) => {
    this.client.emit('guildMemberAdd', message.member)
  
}
