const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
require('moment-duration-format');//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.run = async(client, message, args) => { //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

  if (talkedRecently.has(message.author.id)) {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } else {
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
        talkedRecently.add(message.author.id);
        setTimeout(() => {
    //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);
        }, 3000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }  //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let Electra1 = new Discord.MessageEmbed()
.setAuthor("Electra")//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
.setThumbnail(client.user.avatarURL())//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
.addField("__**Bot Verileri**__", `>  :man_technologist:   **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n>  :gift_heart:  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n>  :bulb:   **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `>  📌  **Bot Sahibi**  <@666223000739381258>,<@761945664447840256> \n\n> :trackball: \ **Bot Geliştiricisi**  <@761945664447840256>,<@666223000739381258> \n`)
.addField("__**Sürümler**__", `>  📌  **Discord.js Sürümü** **|**  **v${Discord.version}** \n>  :medal:  **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__ ", `> **${client.ws.ping}** ms`,true)
.setColor("#ffd100")
message.channel.send(Electra1)
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  enabled: true,
guildOnly: false,
aliases: ['bot-bilgi','i','botbilgi'],//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  permLevel: 0
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
name: "istatistik",
}//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5