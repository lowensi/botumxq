const Discord = require('discord.js');//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const talkedRecently = new Set();
exports.run = (client, message, args) => { //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

         
        talkedRecently.add(message.author.id);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        setTimeout(() => {
      
//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          talkedRecently.delete(message.author.id);
        }, 3000);//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let mention = message.mentions.users.first();//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
let sender = "";
if (message.channel.guild.member(message.author).nickname == null) {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  sender = message.author.username;
} else {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  sender = message.channel.guild.member(message.author).nickname;//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
}
if (mention != null || mention != undefined) {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    name = mention.username + "' ";//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  }
  const avatarEmbedOther = new Discord.MessageEmbed()//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setAuthor(mention.username, mention.avatarURL({ dynamic: true, format: 'png', size: 1024 }))//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('RED')//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setImage(mention.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(avatarEmbedOther);
  return;//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
} else {
  const avatarEmbedYou = new Discord.MessageEmbed()//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setAuthor(sender,message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('RED')
    .setImage(message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL())//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(avatarEmbedYou);
  return;
} //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
message.channel.send("Render Hatası Yada Bilinmeyen Bir Hata Oldu.");
} //Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.conf = {
  enabled: true,
  guildOnly: false,//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: ['avatarım'],
    kategori: 'kullanıcı',
  permLevel: 0//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};
exports.help = {//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'avatar',
  isim: 'Avatar',//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  süre: 'Yok',
  description: 'Avatarınızı Gösterir Veya Birini Etiketlerseniz Kişinin avatarını gösterir.',
  usage: 'avatar <@kullanıcı>'//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Electra Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};