const mongoose = require('mongoose')
const { gold } = require('@commands/economy/add-balance')


const reqString = {
  type: String,
  required: true,
}

const dailyRewardsSchema = mongoose.Schema(
  {
    guildId: reqString,
    userId: reqString,
    gold: Number,
  },
  
  {
    timestamps: true,
    upsert: true
  }
)

module.exports = mongoose.model('daily-rewards', dailyRewardsSchema)
