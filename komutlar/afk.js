const db = require("quick.db");
const Discord = require("discord.js");//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const ayarlar = require('../ayarlar.json')//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const talkedRecently = new Set();
let prefix = ayarlar.prefix//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
exports.run = function(client, message, args) {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

  if (talkedRecently.has(message.author.id)) {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } else {

         //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        talkedRecently.add(message.author.id);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        setTimeout(() => {
        

          talkedRecently.delete(message.author.id);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        }, 3000);
    } 

  var USER = message.author;//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!REASON) return message.channel.send(embed)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  db.set(`afk_${USER.id}`, REASON);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  db.set(`afk_süre_${USER.id}`, Date.now());//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  const afk = new Discord.MessageEmbed()//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('GREEN')
  .setAuthor(message.author.username, message.author.avatarURL)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setDescription(`Başarıyla ${REASON} Sebebiyle \`Afk\` Moduna Başarıyla Girildi.`)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(afk)//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 //Electra Code , Telif Hakla//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5rı Vardır, https://discord.gg/mMMpTt5
exports.conf = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  enabled: true,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: true,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: [],//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  permLevel: 0//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};
 //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'afk',//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  description: 'afk komutu',//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  usage: 'afk'//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};