// const topMembers = require('@features/thanks-leaderboard')
const seconds = 5
const startingTimer = 60
let timer = startingTimer
let importantData = ''

const fetchData = async () => {
  importantData = topMembers()
}

const getText = () => {
  return (`${importantData}\n\nUpdating in ${timer}s...`)
}

const updateTimer = async (message) => {
  message.edit(getText())
  timer -= seconds

  if (timer <= 0) {
    timer = startingTimer
    await fetchData()
  }

  setTimeout(() => {
    updateTimer(message)
  }, 1000 * seconds)
}

module.exports = async (client) => {
  return
  await fetchData()

  const guild = client.guilds.cache.first()
  const channel = guild.channels.cache.get('772327371713019917')

  const message = await channel.send(getText())

  updateTimer(message)
}
