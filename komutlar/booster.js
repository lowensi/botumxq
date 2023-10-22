const Discord = require("discord.js");
const talkedRecently = new Set();
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async (client, message, args) => {
 if (talkedRecently.has(message.author.id)) {
  if (!message.member.roles.cache.has("765846508150980641"))  return message.channel.send(`:x: Bu komutu kullanabilmek için "\`ElectraBoost\`" yetkisine sahip olmalısın.`);
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
      //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);
        }, 3000);
    } //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Malesef Booster Rolün Yok** :x:')

const embed = new Discord.MessageEmbed()//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
.setTitle("BoosterReklam")//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
.setColor('BLUE')
.setDescription(` \n **Sahip:** <@${message.author.id}> \n **Mesaj:** ${istek}`)
client.channels.cache.get('799293676165660733').send(embed)
  
message.channel.send("Başarılı").then(message => message.delete({ timeout: 5000 }));
};//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,
  guildOnly: false,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: [],
  permLevel: 0  
};//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.help = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'sunucu-reklam',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5


//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5