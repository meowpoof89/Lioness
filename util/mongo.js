const mongoose = require('mongoose')
const { mongoPath, mongoPass } = require('@root/config.json')
//const mongopath = mongodb+srv://meowpoof:0fd3stoxpeNHchCz@lioness.rd6up.mongodb.net/<lioness?retryWrites=true&w=majority
module.exports = async () => {
  mongoose.connect(mongoPass, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  return mongoose
}
