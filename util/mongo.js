const mongoose = require('mongoose')
const { mongoPath } = require(process.env.MONGO_PATH)

module.exports = async () => {
  mongoose.connect(mongoPath, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
}
