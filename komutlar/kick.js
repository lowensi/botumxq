const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    const embed = new Discord.MessageEmbed()
      .setDescription("```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("BLACK");//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
    message.channel.send(embed);
    return;
  }
 
  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
      new Discord.MessageEmbed()
        .setDescription("Lütfen atılacak kişiyi etiketleyiniz!")
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
 //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
        message.channel.send(
          `İşlem onaylandı! şahıs sunucudan atıldı!`
        );
 //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        message.guild.member(u).kick();
      }
  

 
module.exports.conf = {
  aliases: [],
  permLevel: 2,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};
 //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
module.exports.help = {
  name: "kick",
  description: "kick",
  usage: "kick"//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5