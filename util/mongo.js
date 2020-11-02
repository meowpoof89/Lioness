const mongoose = require('mongoose')


module.exports = async () => {
  mongoose.connect(process.env.MONGO_PATH, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}
