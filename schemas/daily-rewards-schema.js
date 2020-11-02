const mongoose = require('mongoose')

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
  }
)

module.exports = mongoose.model('daily-rewards', dailyRewardsSchema)
