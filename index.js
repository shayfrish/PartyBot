const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`ready!`);
});


client.on("guildMemberAdd", member => {
    member.send(
      `Welcome to D.F.Y server. We ask you to read the rules of the server in the rules room. Have fun 😀`
    )
  })
 
client.login('NzEwNTU1OTYwODQ5OTg5NjMy.Xr_HzA.ho0SRiuyAJ9tkXYgOSy9F99amAg');