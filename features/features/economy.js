const profileSchema = require('@schemas/profile-schema')

const goldCache = {} // { 'guildId-userId': gold }

module.exports = (client) => {}

module.exports.addGold = async (guildId, userId, gold) => {
  console.log('Running findOneAndUpdate()')

  const result = await profileSchema.findOneAndUpdate(
    {
      guildId,
      userId,
    },
    {
      guildId,
      userId,
      $inc: {
        gold: gold,
      },
    },
    {
      upsert: true,
      new: true,
    }
  )

  goldCache[`${guildId}-${userId}`] = result.gold

  return result.gold
}

module.exports.getGold = async (guildId, userId) => {
  const cachedValue = goldCache[`${guildId}-${userId}`]
  if (cachedValue) {
    return cachedValue
  }

  console.log('Running findOne()')

  const result = await profileSchema.findOne({
    guildId,
    userId,
  })

  let gold = 0
  if (result) {
    gold = result.gold
  } else {
    console.log('Inserting a document')
    await new profileSchema({
      guildId,
      userId,
      gold,
    }).save()
  }

  goldCache[`${guildId}-${userId}`] = gold

  return gold
}
