const { Client, Intents, MessageAttachment, Presence} = require("discord.js");
const checkWelcome = require("./checkWelcome");
const generateImage = require("./generateImage");
const createLive = require("./createLive");
const sendLive = require("./checkStreamers");
const async = require("async");


require('dotenv').config()
const TOKEN = process.env.TOKEN

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_PRESENCES],
});


var fartList = [
  "farts/fart-01.mp3",
  "farts/fart-02.mp3",
  "farts/fart-03.mp3",
  "farts/fart-04.mp3",
  "farts/fart-05.mp3",
  "farts/fart-06.mp3",
  "farts/fart-07.mp3",
  "farts/fart-08.mp3",
  "farts/fart-09.mp3",
  "farts/fart-10.mp3",
  "farts/fart-11.mp3",
];
const randomFart = fartList[Math.floor(Math.random() * fartList.length)]




function arrayRemove(arr, value) { 
    
  return arr.filter(function(ele){ 
      return ele != value;
  });
}




client.on("ready", () => {
  let channel = "974277002372722689"
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  console.log(`|Logged in as ${client.user.tag}!|`);
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

  

                     
         }
     );


client.once("ready", () => {
  
  client.user.setActivity('xHamster', { type: 'WATCHING'});
    });


// const welcomeChannelId = '975216440204460063'



client.on('guildMemberAdd', async (member) => {
  const welcome = await checkWelcome(member)
  
  console.log((`Welcome <@${member.id}>! You are the ${member.guild.memberCount} +th member!`));

  
})



  





client.on("messageCreate", async (msg) => {
  const Owner = msg.guild.ownerId
  
  if (msg.author.bot) return; // Ignore all bots
  let prefix = "!";
  let message = await msg.content;

  let channel = msg.channelId;
  let botChannel = "670544966442811405";
  const farts = new MessageAttachment(fartList[Math.floor(Math.random() * fartList.length)], "fart.mp3")

  



  let name = ''

  

  const sendMessage = (message) => {
    client.channels.cache.get(channel).send(message);
  };

  

 

  if (msg.content ===('ping')) { 
    msg.reply("pong", {
      files: [farts]
    });
  }
  if (msg.content === ('Ping')) {
    msg.reply("Pong");
  }

 
  if (message.startsWith(prefix)) {
    const command = message.slice(prefix.length).split("!")[0];

    let admins = ["OhLindor#8465", Owner];

    // let isAdmin = `${msg.author.username}#${msg.author.discriminator}` in admins;
    let isAdmin = msg.member.roles.cache.find(role => role.name === "Mod");
    
    
    //sends command responses
    switch (command.toLowerCase()) {
      case "stats":
        
        sendMessage(`This server has ${msg.guild.memberCount} members`)
          
        break;

      case "fart":

        msg.reply({files: [farts]});
        break;
      
      case "dabtime":
      
        sendMessage(`You can't spell \"Healthcare\" without \"THC\"!`)
          
        break;

      case 'smelly':
        msg.reply(`<@${msg.author.id}> is ${Math.floor(Math.random() * (1000 - 1 + 1) + 1)}% smelly!`)
        break;

      case 'love':
        msg.reply(`<@${msg.author.id}> is loved ${Math.floor(Math.random() * (1000 - 1 + 1) + 1)}%!`)
        break;
      case "help":
        sendMessage("!stats will show how many members are in this server \n!fart will respond with a random fart sound \n!dabtime will state straight facts \n\"Ping/ping\" will reply with \"Pong/pong\" respectively");
        break;

      // case "embed":
      //   sendMessage("This is a help command");
      //   break;
    }
  }
 
  

  // if (msg.content === "Hello") {
  //   sendMessage("Hello!");
  // }
})


const liveMessages = [];
client.on("presenceUpdate", async (oldPresence, newPresence) => {
  if (newPresence.user.bot) return;

  //client.guilds.cache.forEach(async guild => {
    //console.log(guild.name)
    const member = newPresence.member;
    const live = await createLive(newPresence)    //Checks for live-now channel
    const send = await sendLive(newPresence, liveMessages)
 // })
})
  
  
  // let StreamChannel = newPresence.guild.channels.cache.find(channel => channel.name === "live-now"); //finds live-now channel to fetch/send messages
  
  

  


  // newPresence.activities.forEach(activity => {    //for each new activity
  //   if (newPresence.user.bot) return;

  //   if (activity.type == "STREAMING") {          //If streaming, send message to live-now channel
  //     if (oldPresence == newPresence) return;

  //     if (!liveMessages.includes(member.user.username)){
  //       console.log(`${member.user.username} is streaming at ${activity.url}.`) //console view
  //       StreamChannel.send(`${member.user.username} is streaming at ${activity.url}.`)
  //       liveMessages.push(member.user.username)
  //   }}

  //   console.log(liveMessages)
  //   return
  //     })

  // StreamChannel.messages.fetch({ limit: 100 }).then(messages => {
  //   console.log(`Received ${messages.size} messages`);

  //                             //If user is still streaming delete message 
    
  //   messages.forEach(message => {                                   //Iterate through the messages here with the variable "messages".
      
  //     if (message.content.includes(member.user.username)) {
  //       console.log('deleting')
  //       liveMessages.splice((liveMessages.indexOf(member.user.username)),1)
  //       message.delete()
  //     }

  //   })
  // })
    

  












   

client.login(TOKEN);
