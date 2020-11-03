require('module-alias/register')
const WOKcommands = require('wokcommands')
const Discord = require('discord.js')

const client = new Discord.Client({
  //   owner: '262668355520036874',
  //   commandPrefix: process.env.PREFIX,
  //   invite: 'https://discord.gg/Sk6ftSF'
  })
require('dotenv').config();
const { MongoClient } = require('mongodb')
const path = require('path')
// const MongoDBProvider = require('commando-provider-mongo')
// const loadCommands = require('@root/commands/load-commands')
// const commandBase = require('@root/commands/command-base')
// const loadFeatures = require('@root/features/load-features')
// const Commando = require('discord.js-commando')
const prefix = process.env.PREFIX
const { loadLanguages } = require('@util/language')
const mongo = require('@util/mongo')
const modLogs = require('@features/mod-logs')

// const client = new Commando.CommandoClient({
//   owner: '262668355520036874',
//   commandPrefix: process.env.PREFIX,
//   invite: 'https://discord.gg/Sk6ftSF'
// })


  let ver = process.env.NODE_ENV;

client.on('ready', async () => {
  console.log('The client is ready!')


  
    if (ver === 'production') {
      client.user.setActivity('An Idiot\'s Guide', { type: 'STREAMING', url: 'https://twitch.tv/something' })
    } 
    else {
      client.user.setActivity('in code land', { type: 'PLAYING' });
    }
  

  await mongo()
new WOKcommands(client, 'commands', 'cmds', 'features')
    .setMongoPath(process.env.MONGO_PATH)

    .setSyntaxError('Incorrect syntax! Please use {PREFIX}{COMMAND} {ARGUMENTS}')

    .setPrefix(process.env.PREFIX)

  // client.registry
  //   .registerGroups([
  //     ['misc', 'misc commands'],
  //     ['moderation', 'moderation commands'],
  //     ['economy', 'Commands for the economy system'],
  //     ['giveaway', 'Commands to manage giveaways'],
  //     ['games', 'Commands to handle games'],
  //     ['thanks', 'Commands to help thank people'],
  //     ['suggestions', 'Commands regarding suggestions'],
  //     ['testing', 'Commands to test joining and leaving'],
  //   ])
  //   .registerDefaults()
  //   .registerCommandsIn(path.join(__dirname, 'cmds'))

  loadLanguages(client)
  // commandBase.loadPrefixes(client)
  // loadCommands(client)
  // loadFeatures(client)

  modLogs(client)
})

client.login(process.env.DISCORD_TOKEN)
