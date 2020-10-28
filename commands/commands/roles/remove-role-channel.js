const channel = '760571380428439573'
const role = '760571075091234846'

module.exports = {
    commands: 'finish',
    description: 'Remove a role from a user',
    expectedArgs: "<Target user's @>",
    callback: (message, arguments) => {
      const member = message.author
     
   
    
        if (member.has(role)) {
        member.roles.remove(role)
        message.reply(`That user no longer has the ${role} role`)
      } else {
        message.reply(`That user does not have the ${role} role`)
      }
    
    }
}