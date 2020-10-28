module.exports = {
  commands: ['done', 'rr'],
  minArgs: 2,
  description: 'Remove a role from a user',
  expectedArgs: "<Target user's @> <The role name>",
  callback: (message, arguments) => {
    const targetUser = message.mentions.users.first()
    if (!targetUser) {
      message.reply('Please specify someone to take a role from.')
      return
    }

    arguments.shift()

    const roleName = arguments.join(' ')
    const { guild } = message

    const role = guild.roles.cache.find((role) => {
      return role.name === roleName
    })
    if (!role) {
      message.reply(`There is no role with the name "${roleName}"`)
      return
    }

    const member = guild.members.cache.get(targetUser.id)

    if (member.roles.cache.get(role.id)) {
      member.roles.remove(role)
      message.reply(`That user no longer has the ${roleName} role`)
    } else {
      message.reply(`That user does not have the ${roleName} role`)
    }
  },
}
