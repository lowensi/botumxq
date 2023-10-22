const Discord = require("discord.js");//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!message.member.hasPermission("BAN_MEMBERS")) {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    const embed = new Discord.MessageEmbed()
      .setDescription(":x: ``Bu komutu kullanabilmek için Üyeleri Yasakla yetkisine sahip olmalısın!``")
      .setColor("BLACK");
 
    message.channel.send(embed);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    return;
  }
 //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  let u = message.mentions.users.first();//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        .setDescription(" Lütfen banlanacak kişiyi etiketleyiniz!")//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        .setColor("BLACK")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  }
 //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        message.channel.send(
          `:ok_hand:  İşlem onaylandı! şahıs sunucudan banlandı!`
        );
 //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        message.guild.member(u).ban();
      }//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
   
  
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
module.exports.conf = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: [],
  permLevel: 0,
  enabled: true,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: true,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  kategori: "moderasyon"//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
module.exports.help = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: "ban",//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  description: "kick",//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  usage: "ban"//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};